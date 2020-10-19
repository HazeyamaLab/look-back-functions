import { Octokit } from "@octokit/rest";
import { GITHUB_TOKEN } from "../env";

exports.handler = async function(event, context) {

    console.log(event);

    const octokit = new Octokit({
        auth: GITHUB_TOKEN
    });

    //日の取得
    var day = new Date();

    const issue_number = 1;//=event.body.payload.issue
    const fix = "修正"; //=event.body.payload.fix
    const cause = "げんいん";//=event.body.payload.cause
    const study = "学んだこと";//=event.body.payload.study
    const date = (day.getMonth()+1)+"月"+day.getDate()+"日";
    const human = "人";//=event.body.payload.human
    // const repo = event.body.payload.repo
    const body = "## 修正内容   "+fix+"   ## 原因   "+cause+"   ## 学んだこと   "+study+"   ## リリース日   "+date+"   ## 修正者   "+human;

    const data = await octokit.issues.createComment({
        owner: "HazeyamaLab",
        repo: "look-back-functions",
        issue_number: 1,
        body: "OKOK"
    })

    return {
        statusCode: 200,
        body: JSON.stringify(event)
    };
}
