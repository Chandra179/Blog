import { GetStaticProps, GetStaticPaths } from "next";
import { InferGetStaticPropsType } from 'next'

export default function Project({ card }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{card}</div>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = params?.cardId;
  return {
    props: {
      card: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // path name type must string
  const characters = [{ name: "jack" }, { name: "king" }];
  return {
    paths: characters.map((character) => {
      return {
        params: {
          cardId: character.name,
        },
      };
    }),
    fallback: false,
  };
};
