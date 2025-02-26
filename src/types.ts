export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}