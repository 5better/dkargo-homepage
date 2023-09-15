import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';
import util from 'util';

/**
 * * axios 인스턴스를 생성합니다.
 * @param baseURL
 */
const createAxiosInstance = (baseURL: string, timeout?: number) => {
  const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: baseURL,
    timeout: timeout ? timeout : 10000,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
    paramsSerializer: {
      serialize: (params) => qs.stringify(params, { arrayFormat: 'brackets' }),
    },
  };

  const instance: AxiosInstance = axios.create(axiosRequestConfig);

  /**
   * * 백엔드에 요청을 바로 보낼 수 있는 래핑 함수 입니다.
   */
  // * Axios 사용시 추천되는 기본 옵션들을 설치합니다.
  installDefaults(instance);

  // * 브라우저에서 작동 중이고 개발 단계일때만
  // * 네트워크 디버깅용 로거를 설치합니다.
  installLogger(instance);
  installInterceptor(instance);

  return instance;
};
export default createAxiosInstance;

/**
 * Axios 사용시 추천되는 기본 옵션들을 설치합니다.
 */
export const installDefaults = (instance: AxiosInstance) => {
  // * 기본 헤더를 정의합니다.
  instance.defaults.headers = {
    ...instance.defaults.headers,
  };
};

/**
 * 네트워크 요청 디버깅용 로거를 설치합니다.
 */
export const installLogger = (instance: AxiosInstance) => {
  // * 요청이 발생하기 전에 작동합니다.
  instance.interceptors.request.use(
    (config) => {
      // * 브라우저에서 개발 중에 어떠한 요청이 송신되고 있는지를 알려줍니다.
      console.log(
        `%c📦 API 요청 송신  주소:${
          config.url
        } 유형:${config.method?.toUpperCase()}`,
        'color: #E19A56;',

        config.params,
      );
      return config;
    },
    (error: AxiosError) => {
      if (!process.browser) {
        /* eslint-disable no-console */
        const now = new Date();
        console.error(
          `${now.toISOString()} [ ${error.config.method.toUpperCase()} ] :`,
          error.request.path,
        );
        console.log('\n[ Stack ] : ', error);

        if (error.request) {
          console.log(
            '\n[ RequestHeader ] : ',
            util.inspect(error.request._header),
          );
        }

        if (error.config) {
          console.log(
            '\n[ ConfigHeader ] : ',
            util.inspect(error.config.headers),
          );
          console.log(
            '\n[ RequestQuery ] : ',
            util.inspect(error.config.params),
          );
          console.log('\n[ RequestBody ] : ', util.inspect(error.config.data));
        }

        if (error.response) {
          console.log(
            '\n[ ResponseHeader ] : ',
            util.inspect(error.response.headers),
          );
          console.log(
            '\n[ ResponseData ] : ',
            util.inspect(error.response.data),
          );
        }

        console.log('======================================================\n');
      }
      return Promise.reject(error);
    },
  );

  // * 요청이 발생한 후에 작동합니다.
  instance.interceptors.response.use(
    (response) => {
      // * 브라우저에서 개발 중에 어떠한 응답이 수신되고 있는지를 알려줍니다.
      console.log(
        `%c📫 [API 응답 - SUCCESS] 수신  주소:${
          response.config.url
        } 유형:${response.config.method?.toUpperCase()}`,
        'color: #31B4D9;',
        response,
      );
      return response;
    },
    async (error) => {
      console.log(
        `%c📫 [API 응답 - ERROR] 수신  주소:${error.config.url} 유형:${error.config.status}`,
        'color: #c72727;',
        error,
      );
    },
  );
};

export const installInterceptor = (instance: AxiosInstance) => {
  // * 요청이 발생하기 전에 작동합니다.
  instance.interceptors.request.use(
    (config) => {
      // TODO: 토큰 만료여부, refreshToken으로 토큰 재발급 후 처리 추가
      // * 토큰 저장 시, accessToken값으로 만료여부판단
      // * refreshToken (저장위치 확인 필요 ) - 저장위치 확인  - httpOnly cookie 사용할건지?
      // const token = localStorage.getItem('accessToken');
      // const refreshToken = Cookie.get('refreshToken');

      const accessToken =
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJMT0dJTl9JRCI6Im1hc3RlckBzaXJsb2luLmlvIiwiaXNzIjoiaHR0cHM6Ly9kb21zLmRmdWxsLmlvIiwiVVNFUl9ST0xFIjoiQURNSU4iLCJpYXQiOjE2NzE0MzcwNDV9.g39VKnaq0SQGdBF7ZZ5I8J1lRU2YhmqtlT_p4TzR5ng';
      config.headers['Authorization'] = `Bearer ${accessToken}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // * 요청이 발생한 후에 작동합니다.
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401) {
        console.log('%c############ 401 에러 ############', 'color: purple;');
        // 401 처리
        // const newAuthorization = await unauthorize401();
        // error.config.headers.Authorization = `Bearer ${newAuthorization}`;
        // 재요청
        return axios.request(error.config);
      } else {
        return Promise.reject(error);
      }
    },
  );
};

/**
 * 헤더 Content-Type 변경
 */
export const setPostContentType = (
  instance: AxiosInstance,
  contentType: string,
): void => {
  instance.defaults.headers.post['Content-Type'] = contentType;
};

/**
 * instance.defaults.withCredentials change
 */
export const setWithCredentials = (
  instance: AxiosInstance,
  withCredentials: boolean,
): void => {
  instance.defaults.withCredentials = withCredentials;
};
