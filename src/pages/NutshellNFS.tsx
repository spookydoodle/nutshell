import React from "react";
import { NutshellLayout } from "../layouts/Nutshell";
import { TitleLogoBar } from "../layouts/Header";
import { ImagePreloadWrapper } from "../components/nfs/ImagePreloadWrapper";
import { SlideShow } from "../components/nfs/SlideShow";

export const NutshellNFS: React.FC = () => {
  return (
    <NutshellLayout
      header={<TitleLogoBar title='_NEED_FOR_NUTSHELL' titleShort='_NFS_NUTSHELL' backIcon />}
    >
      <ImagePreloadWrapper>
        <SlideShow />
      </ImagePreloadWrapper>
    </NutshellLayout>
  );
};
