import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: "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"
})

const fetchData = async () => {
    try {
        const result = await octokit.request("GET /repos/H4r0l", {})
        const data = result.data
        console.log(data)
    
    } catch(error){
        console.log(error)
    }
}

export default fetchData