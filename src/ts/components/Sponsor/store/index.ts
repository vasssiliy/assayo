import { observable, action, makeObservable } from 'mobx';

import isMobile from 'ts/helpers/isMobile';
import themeSettings from 'ts/store/ThemeSettings';

export const MODAL_TYPE = {
  HIDE: 0,
  MONEY: 1,
  SHARE: 2,
};

class SponsorStore {
  type: number = MODAL_TYPE.HIDE;

  constructor() {
    makeObservable(this, {
      type: observable,
      open: action,
      close: action,
    });

    if (!isMobile && !themeSettings.getConfig()) {
      this.setTimer();
    }
  }

  setTimer() {
    const ONE_MINUTE = 60 * 1000;
    setInterval(() => {
      if (this.type) return;
      this.type = Math.random() > 0.5
        ? MODAL_TYPE.SHARE
        : MODAL_TYPE.SHARE;
    }, 6 * ONE_MINUTE);
  }

  open() {
    this.type = MODAL_TYPE.MONEY;
  }

  close() {
    this.type = MODAL_TYPE.HIDE;
  }
}

const sponsorStore = new SponsorStore();

export default sponsorStore;
