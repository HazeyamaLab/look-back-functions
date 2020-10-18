require('dotenv').config();

function getGithubToken() {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

    if (!GITHUB_TOKEN) {
        console.warn("[warning] please set environment value GITHUB_TOKEN");
        return "";
    }

    return GITHUB_TOKEN;
}

export const GITHUB_TOKEN = getGithubToken();
