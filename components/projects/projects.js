import GitHubRepoCard from '../card/githubrepocard';

const Projects = ({ repos }) => {
    const repoCards = repos.map((repo, index) => {
        return (
            <a href={repo["html_url"]} target="_blank">
                <GitHubRepoCard repo={repo} key={index} />
            </a>
        );
    });

    return (
        <div>

            <h1 className='font-medium leading-tight text-5xl mt-0 mb-2'>Hello! I'm Emil Persson</h1>
            <div>
                I am a developer, reader and gamer.
            </div>
            <div>I work at Knowit Experience as a Consultant.</div>
            <div>Currently building a timetracking tool using C# and ASP.NET Core MVC.</div>
            <div>Love to learn new things and help out new developers, mostly through Discord.</div>
            <h2 id='projects' className='font-medium leading-tight text-4xl mt-4 mb-2'>Projects</h2>
            <div className='mx-10 my-10'>
                <div className='flex flex-col gap-y-5 justify-center w-100'>
                    {repoCards}
                </div>
            </div>
        </div>
    );
};



export default Projects;