ALTER TABLE public.interest_submissions RENAME COLUMN six_month_wins TO six_month_win;
ALTER TABLE public.interest_submissions RENAME COLUMN preferred_time TO preferred_training_time;
ALTER TABLE public.interest_submissions RENAME COLUMN quarterly_commitment TO membership_fit;
ALTER TABLE public.interest_submissions RENAME COLUMN notes TO anything_else;