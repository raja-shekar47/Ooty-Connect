import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://abwqlquvjqazbnnynutq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFid3FscXV2anFhemJubnludXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NzIxNzIsImV4cCI6MjA2NDM0ODE3Mn0.FujvnUoWLiYaeHXIKRvuD718MAdwCSu9fE5ihv7ibCI";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
