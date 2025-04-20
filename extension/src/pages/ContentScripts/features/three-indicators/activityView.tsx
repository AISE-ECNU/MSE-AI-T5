import getGithubTheme from "../../../../helpers/get-github-theme";
import { isNull } from "../../../../helpers/is-null";
import optionsStorage, {
  HypercrxOptions,
  defaults,
} from "../../../../options-storage";
import generateDataByMonth from "../../../../helpers/generate-data-by-month";
import { RepoMeta } from "../../../../api/common";
import React, { useState, useEffect } from "react";
import TooltipTrigger from "../../../../components/TooltipTrigger";
import { useTranslation } from "react-i18next";
import "../../../../helpers/i18n";
import isGithub from "../../../../helpers/is-github";
import { Rate } from "antd";

const theme = isGithub() ? getGithubTheme() : "light";
interface Props {
  activity: any;
  meta: RepoMeta;
}

const ActivityView = ({ activity, meta }: Props): JSX.Element | null => {
  const [options, setOptions] = useState<HypercrxOptions>(defaults);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    (async function () {
      setOptions(await optionsStorage.getAll());
      i18n.changeLanguage(options.locale);
    })();
  }, [options.locale]);

  if (isNull(activity)) return null;

  const activityData = generateDataByMonth(activity, meta.updatedAt);
  return (
    <>
      <div
        className="chart-title"
        style={{
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ marginRight: "5px", textAlign: "center", fontSize: "14px" }}
        >
          指标详情
        </div>
        <div style={{ height: "10px" }}></div>
        <div>
          <div style={{ marginLeft: "18px", textAlign: "left" }}>
            {" "}
            用户欢迎度:{"   3.8 "}
            <span style={{ margin: "10px" }} />
            <Rate
              allowHalf
              defaultValue={3.8}
              disabled
              style={{
                fontSize: "15px",
                color: "#ffcc00",
                transform: "scale(1.1)",
              }}
            />
          </div>
          <div style={{ marginLeft: "18px", textAlign: "left" }}>
            {" "}
            贡献活跃度:{"   4.7 "}
            <span style={{ margin: "10px" }} />
            <Rate
              allowHalf
              defaultValue={4.7}
              disabled
              style={{
                fontSize: "15px",
                color: "#ffcc00",
                transform: "scale(1.1)",
              }}
            />
          </div>
          <div style={{ marginLeft: "18px", textAlign: "left" }}>
            {" "}
            支持响应度:{"   3.4 "}
            <span style={{ margin: "10px" }} />
            <Rate
              allowHalf
              defaultValue={3.4}
              disabled
              style={{
                fontSize: "15px",
                color: "#ffcc00",
                transform: "scale(1.1)",
              }}
            />
          </div>
        </div>
        <div style={{ height: "10px" }}></div>

        {/* <TooltipTrigger
          iconColor="grey"
          size={13}
          content={t("icon_tip", { icon_content: "$t(activity_icon)" })}
        /> */}
      </div>
      {/* <ActivityChart theme={theme as 'light' | 'dark'} width={270} height={130} data={activityData} /> */}
    </>
  );
};

export default ActivityView;
