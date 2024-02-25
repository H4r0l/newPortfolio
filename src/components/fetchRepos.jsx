import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: "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"
})

try {
    const result = await octokit.request("GET /repos/H4r0l", {
        owner: "H4r0l"
    })
    const data = result.data
    console.log(data)

} catch(error){
    console.log(error)
}