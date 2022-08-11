export interface IReviewProps {
  id: number;
  name: string;
  urlImg: string;
  text: string;
}

export const reviewAvatars: Array<IReviewProps> = [
  {
    id: 0,
    name: 'Anisha Li',
    urlImg: './images/avatar-anisha.png',
    text: `"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."`,
  },
  {
    id: 1,
    name: 'Ali Bravo',
    urlImg: './images/avatar-ali.png',
    text: `"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."`,
  },
  {
    id: 2,
    name: 'Richard Watts',
    urlImg: './images/avatar-richard.png',
    text: `"Mamage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!"`,
  },
  {
    id: 3,
    name: 'Shanai Gough',
    urlImg: './images/avatar-shanai.png',
    text: `"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."`,
  },
];
