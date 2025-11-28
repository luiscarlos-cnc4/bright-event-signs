-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Sign data (pre-filled by admin)
  sign_name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  payment_method TEXT NOT NULL,
  rental_period TEXT NOT NULL DEFAULT '5 horas',
  
  -- Personal data (filled by client)
  full_name TEXT,
  cpf TEXT,
  email TEXT,
  residence_type TEXT,
  residence_condo_name TEXT,
  residence_block TEXT,
  residence_unit TEXT,
  address_street TEXT,
  address_number TEXT,
  address_zip TEXT,
  address_neighborhood TEXT,
  address_city TEXT,
  
  -- Event data (filled by client)
  event_venue_name TEXT,
  event_street TEXT,
  event_number TEXT,
  event_zip TEXT,
  event_neighborhood TEXT,
  event_city TEXT,
  event_date DATE,
  event_start_time TIME,
  event_end_time TIME,
  
  -- Control
  status TEXT NOT NULL DEFAULT 'pending',
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view a booking by ID (for public form access)
CREATE POLICY "Anyone can view bookings by id" 
ON public.bookings 
FOR SELECT 
USING (true);

-- Policy: Anyone can update pending bookings (for client form submission)
CREATE POLICY "Anyone can update pending bookings" 
ON public.bookings 
FOR UPDATE 
USING (status = 'pending');

-- Policy: Authenticated users can create bookings
CREATE POLICY "Authenticated users can create bookings" 
ON public.bookings 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = created_by);

-- Create updated_at trigger
CREATE TRIGGER update_bookings_updated_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();