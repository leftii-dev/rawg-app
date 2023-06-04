export {}

declare global {
    interface Platform {
        id: number,
        name: string,
        image_background: string
    }

    interface PlatformGameDetail {
      id: number, 
      name: string,
      slug: string,
      image: string,
      year_end: number,
      year_start: number,
      games_count: number, 
      image_background:string
    }

    interface Requirements {
      [key:string]: number | string
    }

    interface Rating {
      id: number,
      title: string,
      count: number,
      percent: number
    }

    interface AddedByStatus {
      yet: number,
      owned: number,
      beaten: number,
      toplay: number,
      dropped: number,
      playing: number
    }

    interface ParentPlatform {
      id: number,
      name: string,
      slug: string
    }
    
    interface Genre {
      id: number,
      name: string,
      slug: string,
      games_count: number,
      image_background: string
    }

    interface StoreDetail {
      id: number,
      name: string,
      slug: string,
      domain: string,
      games_count: number,
      image_background: string
    }

    interface Store {
      id: number,
      store: StoreDetail
    }

    interface Tag {
      id: number,
      name: string,
      slug: string,
      language: string,
      games_count: number,
      image_background: string
    }

    interface EsrbRating {
      id: number,
      name: string,
      slug: string
    }

    interface ShortScreenshot {
      id: number,
      image: string
    }

    interface MetacriticPlatformDetail {
      platform: number,
      name: string,
      slug: string
    }

    interface MetacriticPlatform {
      metascore: number,
      url: string,
      platform: MetacriticPlatformDetail
    }

    interface Developer {
      id: number, 
      name: string, 
      slug: string,
      games_count: number, 
      image_background: string
    }

    interface Publisher {
      id: number, 
      name: string,
      slug: string,
      games_count: number,
      image_background: string
    }

    interface GameMin {
      id: number,
      name: string,
      background_image: string,
      platforms: Platform[],
      rating: number
    }

    interface GameFull extends GameMin {
      slug: string,
      released: string,
      tba: boolean,
      rating_top: number,
      ratings: Rating[],
      ratings_count: number,
      reviews_text_count: number,
      added: number,
      added_by_status: AddedByStatus[],
      metacritic: number,
      playtime: number,
      suggestions_count: number,
      updated: string,
      reviews_count: number,
      saturated_color: string,
      dominant_color: string,
      parent_platforms: ParentPlatform[],
      genres: Genre[],
      stores: Store[],
      tags: Tag[],
      esrb_rating: EsrbRating,
      short_screenshots: ShortScreenshot[]
    }

    interface GameDetail {
      id: number,
      slug: string,
      name: string,
      name_original: string,
      description: string,
      metacritic: number,
      metacritic_platforms: MetacriticPlatform[],
      released: string,
      tba: boolean,
      updated: string,
      background_image: string,
      background_image_additional: string,
      website: string,
      rating: number,
      rating_top: number,
      ratings: Rating[],
      reactions: {[key:string]: number}[],
      added: number,
      added_by_status: AddedByStatus[],
      playtime: number,
      screenshots_count: number,
      movies_count: number,
      creators_count: number,
      achievements_count: number,
      parent_achievements_count: number,
      reddit_url: string,
      reddit_name: string,
      reddit_description: string,
      reddit_logo: string,
      reddit_count: number,
      twitch_count: number,
      youtube_count: number,
      reviews_text_count: number,
      ratings_count: number,
      suggestions_count: number,
      alternative_names: string[],
      parent_platforms: ParentPlatform[],
      platforms: Array<{
        platform: PlatformGameDetail,
        released_at: string,
        requirements: Requirements
      }>,
      stores: Array<{
        id: number, 
        url: string,
        store: StoreDetail
      }>,
      developers: Developer[],
      genres: Genre[],
      tags: Tag[],
      publishers: Publisher[],
      esrb_rating: EsrbRating,
      clip: string,
      description_raw: string
    }
}