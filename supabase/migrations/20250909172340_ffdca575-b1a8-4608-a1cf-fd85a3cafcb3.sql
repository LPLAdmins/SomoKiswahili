-- Fix the security definer view issue by removing SECURITY DEFINER
-- and ensuring proper RLS enforcement through policies instead
DROP VIEW IF EXISTS public.tutor_profiles;

-- Create the view without SECURITY DEFINER to fix the security warning
CREATE VIEW public.tutor_profiles AS
SELECT 
  p.id,
  p.full_name,
  p.avatar_url,
  t.bio,
  t.specialization,
  t.languages,
  t.hourly_rate,
  t.rating,
  t.experience_years,
  t.is_verified,
  t.is_active
FROM public.profiles p
INNER JOIN public.tutors t ON t.profile_id = p.id
WHERE t.is_active = true;

-- Grant public read access to the tutor profiles view
GRANT SELECT ON public.tutor_profiles TO anon, authenticated;

-- Since the view joins with profiles table which now has restricted RLS,
-- we need to ensure tutors can be viewed publicly through the tutors table
-- Update the tutors table policy to allow public viewing of active tutors
DROP POLICY IF EXISTS "Anyone can view tutors" ON public.tutors;

CREATE POLICY "Public can view active tutors" 
ON public.tutors 
FOR SELECT 
USING (is_active = true);