import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'test',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
		"CapacitorUpdater": {
			"autoUpdate": false,
		}
	}
};

export default config;
