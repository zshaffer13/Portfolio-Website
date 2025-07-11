type LanguageBreakdown = {
  lang: string;
  percent: number;
};

export async function fetchLanguages(username: string, repo: string): Promise<LanguageBreakdown[]> {
  const res = await fetch(`https://api.github.com/repos/${username}/${repo}/languages`, {
    next: { revalidate: 86400 }, // revalidate once a day
  });

  if (!res.ok) return [];

  const data: Record<string, number> = await res.json();

  const total = Object.values(data).reduce((a, b) => a + b, 0);

  return Object.entries(data).map(([lang, bytes]) => ({
    lang,
    percent: Math.round((bytes / total) * 100),
  }));
}
