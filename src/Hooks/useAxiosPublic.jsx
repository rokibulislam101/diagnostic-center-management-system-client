import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://finalasmt-project-server.vercel.app',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
