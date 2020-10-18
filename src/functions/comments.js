import { Octokit } from "@octokit/rest";
import { GITHUB_TOKEN } from "../env";

exports.handler = async function(event, context) {

    const octokit = new Octokit({
        auth: GITHUB_TOKEN
    });

    const data = await octokit.issues.listCommentsForRepo({
        owner: "HazeyamaLab",
        repo: "look-back-functions",
    })

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}
