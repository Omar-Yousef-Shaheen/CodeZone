export type Locale = "en" | "ar";

export type Direction = "ltr" | "rtl";

export type Dictionary = {
  readonly languages: Readonly<Record<Locale, string>>;
  readonly languageSwitcher: {
    readonly label: string;
    readonly currentLanguage: string;
    readonly switchLanguage: string;
    readonly targetLanguage: string;
  };
  readonly actions: {
    readonly openLink: string;
    readonly openLinkInNewTab: string;
    readonly closeMenu: string;
    readonly backToTop: string;
  };
  readonly brand: {
    readonly studioName: string;
    readonly developerName: string;
    readonly developerAttribution: string;
    readonly logoAlt: string;
    readonly homeLinkLabel: string;
  };
  readonly navbar: {
    readonly navigationLabel: string;
    readonly mobileNavigationLabel: string;
    readonly openMenu: string;
    readonly closeMenu: string;
    readonly cta: string;
    readonly ctaAriaLabel: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly heading: {
      readonly leading: string;
      readonly emphasis: string;
    };
    readonly description: string;
    readonly actionsLabel: string;
    readonly primaryCta: string;
    readonly primaryCtaAriaLabel: string;
    readonly secondaryCta: string;
    readonly secondaryCtaAriaLabel: string;
    readonly cvLink: string;
    readonly cvLinkAriaLabel: string;
    readonly metricsLabel: string;
    readonly metrics: readonly [
      { readonly value: string; readonly label: string },
      { readonly value: string; readonly label: string },
      { readonly value: string; readonly label: string },
    ];
  };
  readonly navigation: {
    readonly home: string;
    readonly about: string;
    readonly experience: string;
    readonly projects: string;
    readonly services: string;
    readonly process: string;
    readonly contact: string;
  };
};

export type NavigationTranslationKey = keyof Dictionary["navigation"];

export type I18nContextValue = {
  readonly locale: Locale;
  readonly direction: Direction;
  readonly dictionary: Dictionary;
  readonly setLocale: (locale: Locale) => void;
};
