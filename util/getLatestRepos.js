import axios from "axios";

export const getLatestRepos = async ({ username }) => {
    try {

        const res = await axios.get(
            `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
        );
        let repos = res.data.items;
        let latestSixRepos = repos.splice(0, 6);
        console.log(repos);
        console.log(latestSixRepos);
        return latestSixRepos;
    } catch (error) {
        console.log(error);
    }
}

export const GetLatestReposTest = async () => {
    try {
        await fs.readFileSync('/test-data.json', (error, content) => {
            var data = JSON.parse(content);
            return data;
        });
    } catch (error) {
        console.log(error);
    }
};