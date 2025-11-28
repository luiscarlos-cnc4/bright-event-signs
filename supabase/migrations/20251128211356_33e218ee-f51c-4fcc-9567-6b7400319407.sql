-- Remover política antiga de UPDATE
DROP POLICY IF EXISTS "Anyone can update pending bookings" ON public.bookings;

-- Criar nova política corrigida com USING e WITH CHECK separados
CREATE POLICY "Anyone can update pending bookings" 
ON public.bookings
FOR UPDATE
USING (status = 'pending')
WITH CHECK (true);