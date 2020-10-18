import { Octokit } from "@octokit/rest";
import { GITHUB_TOKEN } from "../env";

exports.handler = async function(event, context) {

    const octokit = new Octokit({
        auth: GITHUB_TOKEN
    });

    var day = new Date();

    const issue_number = 1;
    const fix = "しゅうせい";
    const cause = "げんいん";
    const study = "学んだこと";
    const date = (day.getMonth()+1)+"月"+day.getDate()+"日";
    const human = "人";

    const body = "## 修正内容<br>"+fix+"<br>## 原因<br>"+cause+"<br>## 学んだこと<br>"+study+"<br>## リリース日<br>"+date+"<br>## 修正者<br>"+human;

    const data = await octokit.issues.createComment({
        owner: "HazeyamaLab",
        repo: "look-back-functions",
        issue_number,
        body
    })

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}
