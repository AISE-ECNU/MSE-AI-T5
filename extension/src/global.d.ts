type ThemeType = "light" | "dark";

type FeatureName = string;
type FeatureId = `MSE-AI-T5-${FeatureName}`;

// It should be just for README.md, but 🤷‍♂️
declare module "*.md" {
  export const importedFeatures: FeatureName[];
}
