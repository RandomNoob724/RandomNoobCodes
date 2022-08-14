import Image from 'next/image';
import { RainbowHighlight } from '../RainbowHighlight';
import { RoughNotationGroup } from 'react-rough-notation';
import styles from './hero.module.scss'
import profileImage from '../../public/profile.jpg';

const Hero = ({ profilePicture }) => {
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
    return (
        <div className={`w-100`}>
            <Image src={'/coding.jpg'} width={1920} height={1080} layout="responsive" />
            <div className={`${styles.textContainer} flex flex-row w-100`}>
                <div className={`w-fit`}>
                    <RoughNotationGroup show={true}>
                        <RainbowHighlight color={colors[0]}>
                            <h1 className='text-3xl md:text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
                                Developer.
                            </h1>
                        </RainbowHighlight>
                        <RainbowHighlight color={colors[1]}>
                            <h1 className='text-3xl md:text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
                                Reader.
                            </h1>
                        </RainbowHighlight>
                        <RainbowHighlight color={colors[2]}>
                            <h1 className='text-3xl md:text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
                                Thinker.
                            </h1>
                        </RainbowHighlight>
                        <RainbowHighlight color={colors[3]}>
                            <h1 className='text-3xl md:text-6xl lg:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
                                Animal Lover.
                            </h1>
                        </RainbowHighlight>
                    </RoughNotationGroup>
                </div>
                <div className='w-1/2 flex justify-center items-center xl:w-1/2 lg:w-2/3 md:w-3/4'>
                    <div className={`${styles.profileImage}`}>
                        <Image className='rounded-full' src={profileImage} height={400} width={400} layout="responsive" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;