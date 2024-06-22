import { useEffect, useState } from 'react';

const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://finalasmt-project-server.vercel.appdoctors')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setLoading(false);
      });
  }, []);

  return [doctors, loading];
};

export default useDoctors;
