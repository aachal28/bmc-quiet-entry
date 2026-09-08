CREATE TABLE public.interest_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  heard_about TEXT NOT NULL,
  familiarity TEXT NOT NULL,
  six_month_wins TEXT[] NOT NULL DEFAULT '{}',
  patience TEXT NOT NULL,
  current_training TEXT[] NOT NULL DEFAULT '{}',
  preferred_schedule TEXT NOT NULL,
  preferred_time TEXT NOT NULL,
  quarterly_commitment TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.interest_submissions TO anon;
GRANT INSERT ON public.interest_submissions TO authenticated;
GRANT ALL ON public.interest_submissions TO service_role;

ALTER TABLE public.interest_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit interest" ON public.interest_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);