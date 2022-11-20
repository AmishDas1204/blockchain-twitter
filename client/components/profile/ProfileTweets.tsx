
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}
const tweets = [
  {
      displayName :'Amish',
      userName : 'aaaaaaaaaaaaaaaaaadddddddddd',
      avatar : 'https://www.w3schools.com/images/w3schools_green.jpg',
      text: 'gm',
      isProfileImageNft : true,
      timestamp: '2022-11-20T12:00:00.000Z',

  },
  {
      displayName :'Amish',
      userName : 'aaaaaaaaaaaaaaaaaadddddddddd',
      avatar : 'https://www.w3schools.com/images/w3schools_green.jpg',
      text: 'gm',
      isProfileImageNft : true,
      timestamp: '2022-11-20T12:00:00.000Z',

  },
  {
      displayName :'Amish',
      userName : 'aaaaaaaaaaaaaaaaaadddddddddd',
      avatar : 'https://www.w3schools.com/images/w3schools_green.jpg',
      text: 'gm',
      isProfileImageNft : true,
      timestamp: '2022-11-20T12:00:00.000Z',

  },
  {
      displayName :'Amish',
      userName : 'aaaaaaaaaaaaaaaaaadddddddddd',
      avatar : 'https://www.w3schools.com/images/w3schools_green.jpg',
      text: 'gm',
      isProfileImageNft : true,
      timestamp: '2022-11-20T12:00:00.000Z',

  },
  {
      displayName :'Amish',
      userName : 'aaaaaaaaaaaaaaaaaadddddddddd',
      avatar : 'https://www.w3schools.com/images/w3schools_green.jpg',
      text: 'gm',
      isProfileImageNft : true,
      timestamp: '2022-11-20T12:00:00.000Z',

  },
  {
      displayName :'Amish',
      userName : 'aaaaaaaaaaaaaaaaaadddddddddd',
      avatar : 'https://www.w3schools.com/images/w3schools_green.jpg',
      text: 'gm',
      isProfileImageNft : true,
      timestamp: '2022-11-20T12:00:00.000Z',

  },

]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {
        tweets.map((tweet,index) => (
          <Post
          key ={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}

          />
        ))
      }
    </div>
  )

  }
export default ProfileTweets