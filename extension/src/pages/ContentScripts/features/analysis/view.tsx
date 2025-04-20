import getGithubTheme from "../../../../helpers/get-github-theme";
import { isNull } from "../../../../helpers/is-null";
import { numberWithCommas } from "../../../../helpers/formatter";
import optionsStorage, {
  HypercrxOptions,
  defaults,
} from "../../../../options-storage";
import generateDataByMonth from "../../../../helpers/generate-data-by-month";
import { RepoMeta } from "../../../../api/common";
import React, { useState, useEffect } from "react";
import { Popover } from 'antd';

import { useTranslation } from "react-i18next";
import "../../../../helpers/i18n";
import isGithub from "../../../../helpers/is-github";
import AnalysisView from './analysisView';
const theme = isGithub() ? getGithubTheme() : "light";

interface Props {
  activity: any;
  openrank: any;
  attention: any;
  participant: any;
  contributor: any;
  meta: RepoMeta;
}

const View = ({
  activity,
  openrank,
  attention,
  participant,
  contributor,
  meta,
}: Props): JSX.Element | null => {
  const [options, setOptions] = useState<HypercrxOptions>(defaults);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    (async function () {
      setOptions(await optionsStorage.getAll());
      i18n.changeLanguage(options.locale);
    })();
  }, [options.locale]);

  if (
    isNull(activity) ||
    isNull(openrank) ||
    isNull(attention) ||
    isNull(participant) ||
    isNull(contributor)
  )
    return null;

  const activityData = generateDataByMonth(activity, meta.updatedAt);
  const openrankData = generateDataByMonth(openrank, meta.updatedAt);
  const participantData = generateDataByMonth(participant, meta.updatedAt);
  const contributorData = generateDataByMonth(contributor, meta.updatedAt);
  const attentionData = generateDataByMonth(attention, meta.updatedAt);
  const rocketLightLogo = chrome.runtime.getURL("rocketLightLogo.png");
  const rocketDarkLogo = chrome.runtime.getURL("rocketDarkLogo.png");
  const starLogo = chrome.runtime.getURL("star.svg");

  const textColor = isGithub()
    ? theme === "light"
      ? "#24292F"
      : "#C9D1D9"
    : "#40485B";
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const change_state = () => {
    setIsMenuVisible(!isMenuVisible);
  }
  
  return (
    <div>
    <Popover 
      content={
        <AnalysisView 
          activity={activityData}
          openrank={openrankData}
          attention={attentionData}
          participant={participantData}
          contributor={contributorData}
          meta={meta}
        />
      }
      trigger="click"
      placement="bottom"
      open={isMenuVisible}
      onOpenChange={setIsMenuVisible}
      overlayInnerStyle={{
        padding: '12px',
        borderRadius: '6px'
      }}
      arrow={false}
    >
      <button className="Box-sc-g0xbh4-0 exSala prc-Button-ButtonBase-c50BI">
        <span className="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-">
          <span>
            <svg
              className="octicon octicon-pin"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="17099"
              width="18"
              height="18"
              aria-hidden="true"
              data-view-component="true"
              style={{
                marginRight: "2px",
                marginTop: "-1.5px",
              }}
            >
              <path
                d="M213.333333 853.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666v-170.666667c0-23.466667 19.2-42.666667 42.666666-42.666667s42.666667 19.2 42.666667 42.666667v170.666667c0 23.466667-19.2 42.666667-42.666667 42.666666zM411.733333 853.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666V490.666667c0-23.466667 19.2-42.666667 42.666666-42.666667s42.666667 19.2 42.666667 42.666667v320c0 23.466667-19.2 42.666667-42.666667 42.666666zM612.266667 853.333333c-23.466667 0-42.666667-19.2-42.666667-42.666666V576c0-23.466667 19.2-42.666667 42.666667-42.666667s42.666667 19.2 42.666666 42.666667v234.666667c0 23.466667-19.2 42.666667-42.666666 42.666666zM810.666667 853.333333c-23.466667 0-42.666667-19.2-42.666667-42.666666V512c0-23.466667 19.2-42.666667 42.666667-42.666667s42.666667 19.2 42.666666 42.666667v298.666667c0 23.466667-19.2 42.666667-42.666666 42.666666zM213.333333 512c-10.666667 0-23.466667-4.266667-32-14.933333-14.933333-17.066667-14.933333-44.8 2.133334-59.733334l234.666666-213.333333c17.066667-14.933333 44.8-14.933333 59.733334 2.133333 14.933333 17.066667 14.933333 44.8-2.133334 59.733334l-234.666666 213.333333c-6.4 8.533333-17.066667 12.8-27.733334 12.8z"
                p-id="17100"
                fill="#7E8690"
              ></path>
              <path
                d="M618.666667 448c-10.666667 0-19.2-4.266667-27.733334-10.666667l-170.666666-149.333333c-17.066667-14.933333-19.2-42.666667-4.266667-59.733333s42.666667-19.2 59.733333-4.266667l170.666667 149.333333c17.066667 14.933333 19.2 42.666667 4.266667 59.733334-8.533333 10.666667-19.2 14.933333-32 14.933333z"
                p-id="17101"
                fill="#7E8690"
              ></path>
              <path
                d="M618.666667 448c-10.666667 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733333l192-192c17.066667-17.066667 42.666667-17.066667 59.733333 0 17.066667 17.066667 17.066667 42.666667 0 59.733333l-192 192c-8.533333 8.533333-19.2 12.8-29.866666 12.8z"
                p-id="17102"
                fill="#7E8690"
              ></path>
              <path
                d="M810.666667 256h-128c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666666h128c23.466667 0 42.666667 19.2 42.666666 42.666666s-19.2 42.666667-42.666666 42.666667z"
                p-id="17103"
                fill="#7E8690"
              ></path>
              <path
                d="M810.666667 384c-23.466667 0-42.666667-19.2-42.666667-42.666667v-128c0-23.466667 19.2-42.666667 42.666667-42.666666s42.666667 19.2 42.666666 42.666666v128c0 23.466667-19.2 42.666667-42.666666 42.666667z"
                p-id="17104"
                fill="#7E8690"
              ></path>
            </svg>
          </span>
          <span> Rate</span>
          {/* <img
            className="icon"
            width={14}
            height={14}
            src={starLogo}
            style={{ float: "left" }}
            alt="starLogo"
            /> */}
          <span className="ml-2 Counter rounded-3 NotificationsSubscriptionsMenu-module__watchCounter--nAbhU">4.0 </span>
        </span>
        <span className="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB">
          <svg className="octicon octicon-triangle-down" display="inline-block" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
          </svg>
        </span>
      </button>
    </Popover>

    </div>
  );
};

export default View;
