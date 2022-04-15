export default function Project({ project }) {
  return <div>{project}</div>;
}

export async function getStaticProps({ params }) {
  const projectId = params.projectId;
  return {
    props: {
      project: projectId,
    },
  };
}

export async function getStaticPaths() {
  // path name type must string
  const characters = [{ name: "1" }, { name: "2" }];
  return {
    paths: characters.map((character) => {
      const projectId = character.name;
      return {
        params: {
          projectId,
        },
      };
    }),
    fallback: false,
  };
}
