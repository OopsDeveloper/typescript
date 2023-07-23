{
  // 기존에 있는 타입 중 내가 원하는 것만 사용하고 싶을 때 사용
  // 선택하는 것이 간단한 경우 사용
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, 'id' | 'title'>; 

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
