import { Octokit } from "@octokit/rest";
import { GITHUB_TOKEN } from "../env";

exports.handler = async function(event, context) {

    console.log(event);

    const octokit = new Octokit({
        auth: GITHUB_TOKEN
    });

    //日の取得
    var day = new Date();
    console.log(JSON.parse(event.body))
    const obj=JSON.parse(event.body)

    const issue_number =obj["issue"];
    const fix =obj["fix"];
    const cause =obj["cause"];
    const study =obj["study"];
    const date = (day.getMonth()+1)+"月"+day.getDate()+"日";
    const human =obj["human"];
    const repo = obj["repo"]
    const body = `## 修正内容
`+fix+`
## 原因
`+cause+`
## 学んだこと
`+study+`
## リリース日
`+date+`
## 修正者
`+human;
    
    const data = await octokit.issues.createComment({
        owner: "haze-lab",
        repo,
        issue_number,
        body
    })

    const remove = await octokit.issues.removeLabel({
        owner: "haze-lab",
        repo,
        issue_number,
        name: "need_check",
      });

    return {
        statusCode: 200,
        body: JSON.stringify(event)
    };
}
