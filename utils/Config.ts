class Config {
    private static instance: Config;
    public userName: string;
    public password: string;
  
    private constructor() {
      this.userName = process.env.UI_USERNAME || '';
      this.password = process.env.UI_PASSWORD || '';
  
      // Validate that required variables are set
      if (!this.userName || !this.password) {
        throw new Error("Missing environment variables: Please set UI_USERNAME and UI_PASSWORD");
      }
    }
  
    public static getInstance(): Config {
      if (!Config.instance) {
        Config.instance = new Config();
      }
      return Config.instance;
    }
  }
  
  export default Config;