import Card from "./card";
import Image from "next/image";
const GitHubRepoCard = ({ repo }) => {
    return (
        <Card className="w-100 px-3 py-2">
            <h2 className='font-medium leading-tight text-xl'>{repo.name}</h2>
            <p>{repo.description}</p>
            {repo.language && (
                <span className="flex flex-row gap-x-1 align-center my-2">
                    <Image src={`/${repo.language}.svg`} height={24} width={24} />
                    {repo.language}
                </span>
            )}
        </Card>
    );
};

export default GitHubRepoCard;