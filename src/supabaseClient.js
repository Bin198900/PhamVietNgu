import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://nckbthxreacjxaiokjkn.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ja2J0aHhyZWFjanhhaW9ramtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMTkzMjksImV4cCI6MjA3Nzc5NTMyOX0.Ep5LFWJASC6tzidn3G5jsF9BULjf6JNq-1jFy3bReas";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
