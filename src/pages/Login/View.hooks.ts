import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { APP_TOKEN } from '../../constants/enums';
import { getToken, setSession } from '../../helpers/AuthFunction';

const useView = () => {
  const [something, setSomething] = useState('something');
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const token = searchParams.get('Token');
  const isLoggedIn = getToken();

  const checkParams = async () => {
    if (!token && !isLoggedIn) {
      return navigate('/unauthorized');
    } else if (token) {
      await login();
    } else {
      const isExpired = checkSession();
      if (isExpired) {
        await login();
      }
    }
  };

  const login = async () => {
    const url = `${process.env.REACT_APP_API_URL}api/v1/Authorize/login/${token}`;
    localStorage.clear();

    return fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSession(data, 0, []).then((result) => navigate('/dashboard'));
      })
      .catch((err) => {
        localStorage.clear();
        navigate('/unauthorized');
      });
  };

  const checkSession = (): boolean => {
    const expiresTime = Number(
      localStorage.getItem(`${APP_TOKEN.prefix}expires_at`)
    );
    const currentTime = new Date().getTime();
    return expiresTime - currentTime <= 0;
  };

  useEffect(() => {
    checkParams();
  }, []);

  return { something, searchParams };
};

export default useView;
