{
  // pick 과 반대로 원하는 것을 제외한 나머지
  // 내가 빼고자하는 것이 더 명확한 경우 사용
  // Video에 없는 것도 가능
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
