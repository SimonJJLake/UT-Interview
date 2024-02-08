export interface VideoFile {
  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  fps: number;
  link: string;
}

export interface VideoImage {
  id: number;
  nr: number;
  picture: string;
}

export interface Video {
  id: number;
  width: number;
  height: number;
  duration: number;
  url: string;
  image: string;
  user: {
    id: number;
    name: string;
    url: string;
  };
  video_files: VideoFile[];
}

export interface ApiData {
  page: number;
  per_page: number;
  videos: Video[];
  total_results: number;
  next_page: string;
  url: string;
}
