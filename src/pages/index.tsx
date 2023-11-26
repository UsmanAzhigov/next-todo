import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = ({ tasks }) => {
  return (
      <div className={styles.root}>
        <h1>To-Do List</h1>
        <ul>
          {tasks?.map((task) => (
              <li key={task.id}>
                <Link href={`/task/${task.id}`}>
                  {task.name}
                </Link>
              </li>
          ))}
        </ul>
      </div>
  );
};

// Static Site Generation (SSG)
export async function getStaticProps() {
  try {
    const data = await fetch('https://764b7222835e21fb.mokky.dev/task');
    const tasks = await data.json();

    return {
      props: {
        tasks,
      },
    };
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return {
      props: {
        tasks: [],
      },
    };
  }
}

// Server-Side Rendering (SSR)
// export async function getServerSideProps() {
//   try {
//     const data = await fetch('https://764b7222835e21fb.mokky.dev/task');
//     const tasks = await data.json();
//
//     return {
//       props: {
//         tasks,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//     return {
//       props: {
//         tasks: [],
//       },
//     };
//   }
// }

// Incremental Static Regeneration (ISR)
// export async function getStaticProps() {
//   try {
//     const data = await fetch('https://764b7222835e21fb.mokky.dev/task');
//     const tasks = await data.json();
//
//     return {
//       props: {
//         tasks,
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error("Error fetching tasks:", error);
//     return {
//       props: {
//         tasks: [],
//       },
//     };
//   }
// }

export default Home;
