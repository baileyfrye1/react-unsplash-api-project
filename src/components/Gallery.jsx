import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../context';
import axios from 'axios';

const Gallery = () => {
  const { searchValue } = useGlobalContext();

  const { isLoading, data, isError } = useQuery({
    queryKey: ['images', searchValue],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?query=${searchValue}&client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`,
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className='image-container'>
        <h4>There was an error</h4>
      </section>
    );
  }

  const results = data.results;
  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>There was an error...</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {results.map((image) => (
        <img
          src={image?.urls?.regular}
          key={image.id}
          alt={image.alt_description}
          className='img'
        />
      ))}
    </section>
  );
};
export default Gallery;
