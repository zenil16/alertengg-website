/**
 * Explicit registry of the captured originals the site actually uses.
 *
 * Why explicit and not `import.meta.glob('/source-images/**')`: an eager glob
 * makes Vite emit EVERY matched file into the build, which shipped all 120
 * originals (22 MB) — including the two images that were commented out on the
 * live site and must stay unused (CLAUDE.md). Listing imports by hand keeps the
 * output to what is really referenced, and makes that set auditable.
 *
 * Deliberately absent: gallery/products-56.jpeg and
 * Foundry-Quality-Control/Thermo-Analysis-1.jpg (commented out on the live
 * site), the oversized footer icon rasters, the four index/ label graphics
 * (replaced by real text + photos on Home), and the JotForm header logo
 * (the embedded JotForm form renders its own).
 *
 * Add an entry here when a page starts using another captured image.
 */
import i_shared_alert_engineering_works_logo_png from '../../source-images/shared/alert-engineering-works-logo.png';
import i_shared_favicon_png from '../../source-images/shared/favicon.png';
import i_shared_banner_png from '../../source-images/shared/banner.png';
import i_about_us_alert1_1771251175535_jpg from '../../source-images/about-us/alert1_1771251175535.jpg';
import i_about_us_alert2_1771250748749_jpg from '../../source-images/about-us/alert2_1771250748749.jpg';
import i_about_us_alert3_1771250759684_jpg from '../../source-images/about-us/alert3_1771250759684.jpg';
import i_certification_alertiso_1791458416987_jpg from '../../source-images/certification/alertiso_1791458416987.jpg';
import i_certification_certificate_alert_1782881638369_jpg from '../../source-images/certification/certificate_alert_1782881638369.jpg';
import i_Aluminium_Foundry_Aluminium_foundry1_jpeg from '../../source-images/Aluminium-Foundry/Aluminium foundry1.jpeg';
import i_Aluminium_Foundry_aluminium_foundry2_jpg from '../../source-images/Aluminium-Foundry/aluminium_foundry2.jpg';
import i_Aluminium_Foundry_aluminium_foundry3_jpg from '../../source-images/Aluminium-Foundry/aluminium_foundry3.jpg';
import i_Aluminium_Foundry_aluminium_foundry4_jpg from '../../source-images/Aluminium-Foundry/aluminium_foundry4.jpg';
import i_Aluminium_Foundry_aluminium_foundry5_jpg from '../../source-images/Aluminium-Foundry/aluminium_foundry5.jpg';
import i_Machine_Shop_machine_shop1_jpg from '../../source-images/Machine-Shop/machine_shop1.jpg';
import i_Machine_Shop_machine_shop2_jpg from '../../source-images/Machine-Shop/machine_shop2.jpg';
import i_Machine_Shop_machine_shop3_jpg from '../../source-images/Machine-Shop/machine_shop3.jpg';
import i_Machine_Shop_Mercury_Machine_Tools_Services_jpeg from '../../source-images/Machine-Shop/Mercury Machine Tools Services.jpeg';
import i_Machine_Shop_Jyoti_CNC_Automation_Limited_png from '../../source-images/Machine-Shop/Jyoti CNC  Automation Limited.png';
import i_Casting_Design_casting1_jpg from '../../source-images/Casting-Design/casting1.jpg';
import i_Casting_Design_casting2_jpg from '../../source-images/Casting-Design/casting2.jpg';
import i_Casting_Design_casting3_jpg from '../../source-images/Casting-Design/casting3.jpg';
import i_Tool_Making_tool1_jpg from '../../source-images/Tool-Making/tool1.jpg';
import i_Tool_Making_tool2_jpg from '../../source-images/Tool-Making/tool2.jpg';
import i_Tool_Making_tool4_jpg from '../../source-images/Tool-Making/tool4.jpg';
import i_Tool_Making_tool3_jpg from '../../source-images/Tool-Making/tool3.jpg';
import i_Foundry_Quality_Control_foundry_quality_png from '../../source-images/Foundry-Quality-Control/foundry-quality.png';
import i_Foundry_Quality_Control_Quality_control_2_jpg from '../../source-images/Foundry-Quality-Control/Quality-control-2.jpg';
import i_Foundry_Quality_Control_Quality_control_3_jpg from '../../source-images/Foundry-Quality-Control/Quality-control-3.jpg';
import i_Foundry_Quality_Control_melt_quality_equipment1_jpg from '../../source-images/Foundry-Quality-Control/melt-quality-equipment1.jpg';
import i_Foundry_Quality_Control_melt_quality_equipment2_jpg from '../../source-images/Foundry-Quality-Control/melt-quality-equipment2.jpg';
import i_gallery_1_jpeg from '../../source-images/gallery/1.jpeg';
import i_gallery_2_jpeg from '../../source-images/gallery/2.jpeg';
import i_gallery_3_jpeg from '../../source-images/gallery/3.jpeg';
import i_gallery_4_jpeg from '../../source-images/gallery/4.jpeg';
import i_gallery_5_jpeg from '../../source-images/gallery/5.jpeg';
import i_gallery_6_jpeg from '../../source-images/gallery/6.jpeg';
import i_gallery_7_jpeg from '../../source-images/gallery/7.jpeg';
import i_gallery_8_png from '../../source-images/gallery/8.png';
import i_gallery_9_png from '../../source-images/gallery/9.png';
import i_gallery_10_png from '../../source-images/gallery/10.png';
import i_gallery_11_png from '../../source-images/gallery/11.png';
import i_gallery_1_png from '../../source-images/gallery/1.png';
import i_gallery_3_png from '../../source-images/gallery/3.png';
import i_gallery_2_png from '../../source-images/gallery/2.png';
import i_gallery_4_png from '../../source-images/gallery/4.png';
import i_gallery_products_59_jpeg from '../../source-images/gallery/products-59.jpeg';
import i_gallery_products_60_jpeg from '../../source-images/gallery/products-60.jpeg';
import i_gallery_products_61_jpeg from '../../source-images/gallery/products-61.jpeg';
import i_gallery_products_62_jpeg from '../../source-images/gallery/products-62.jpeg';
import i_gallery_products_63_jpeg from '../../source-images/gallery/products-63.jpeg';
import i_gallery_products_64_jpeg from '../../source-images/gallery/products-64.jpeg';
import i_gallery_products_65_jpeg from '../../source-images/gallery/products-65.jpeg';
import i_gallery_products_43_jpeg from '../../source-images/gallery/products-43.jpeg';
import i_gallery_products_44_jpeg from '../../source-images/gallery/products-44.jpeg';
import i_gallery_products_45_jpeg from '../../source-images/gallery/products-45.jpeg';
import i_gallery_products_46_jpeg from '../../source-images/gallery/products-46.jpeg';
import i_gallery_products_48_jpeg from '../../source-images/gallery/products-48.jpeg';
import i_gallery_products_49_jpeg from '../../source-images/gallery/products-49.jpeg';
import i_gallery_products_50_jpeg from '../../source-images/gallery/products-50.jpeg';
import i_gallery_products_51_jpeg from '../../source-images/gallery/products-51.jpeg';
import i_gallery_products_52_jpeg from '../../source-images/gallery/products-52.jpeg';
import i_gallery_products_53_jpeg from '../../source-images/gallery/products-53.jpeg';
import i_gallery_products_54_jpeg from '../../source-images/gallery/products-54.jpeg';
import i_gallery_products_55_jpeg from '../../source-images/gallery/products-55.jpeg';
import i_gallery_Aluminium_Reserve_Dise1_jpeg from '../../source-images/gallery/Aluminium Reserve Dise1.jpeg';
import i_gallery_aluminium_motor_body_jpeg from '../../source-images/gallery/aluminium-motor-body.jpeg';
import i_gallery_Aluminium_Reserve_Dise2_jpeg from '../../source-images/gallery/Aluminium Reserve Dise2.jpeg';
import i_gallery_products_01_jpg from '../../source-images/gallery/products_01.jpg';
import i_gallery_products_42_jpeg from '../../source-images/gallery/products_42.jpeg';
import i_gallery_products_02_jpg from '../../source-images/gallery/products_02.jpg';
import i_gallery_products_03_jpg from '../../source-images/gallery/products_03.jpg';
import i_gallery_products_04_jpg from '../../source-images/gallery/products_04.jpg';
import i_gallery_products_05_jpg from '../../source-images/gallery/products_05.jpg';
import i_gallery_products_06_jpg from '../../source-images/gallery/products_06.jpg';
import i_gallery_products_07_jpg from '../../source-images/gallery/products_07.jpg';
import i_gallery_products_08_jpg from '../../source-images/gallery/products_08.jpg';
import i_gallery_products_09_jpg from '../../source-images/gallery/products_09.jpg';
import i_gallery_products_10_jpg from '../../source-images/gallery/products_10.jpg';
import i_gallery_products_11_jpg from '../../source-images/gallery/products_11.jpg';
import i_gallery_products_12_jpg from '../../source-images/gallery/products_12.jpg';
import i_gallery_products_13_jpg from '../../source-images/gallery/products_13.jpg';
import i_gallery_products_14_jpg from '../../source-images/gallery/products_14.jpg';
import i_gallery_products_15_jpg from '../../source-images/gallery/products_15.jpg';
import i_gallery_products_16_jpg from '../../source-images/gallery/products_16.jpg';
import i_gallery_products_17_jpg from '../../source-images/gallery/products_17.jpg';
import i_gallery_products_18_jpg from '../../source-images/gallery/products_18.jpg';
import i_gallery_products_19_jpg from '../../source-images/gallery/products_19.jpg';
import i_gallery_products_20_jpg from '../../source-images/gallery/products_20.jpg';
import i_gallery_products_21_jpg from '../../source-images/gallery/products_21.jpg';
import i_gallery_products_22_jpg from '../../source-images/gallery/products_22.jpg';
import i_gallery_products_23_jpg from '../../source-images/gallery/products_23.jpg';
import i_gallery_products_24_jpg from '../../source-images/gallery/products_24.jpg';
import i_gallery_products_25_jpg from '../../source-images/gallery/products_25.jpg';
import i_gallery_products_26_jpg from '../../source-images/gallery/products_26.jpg';
import i_gallery_products_27_jpg from '../../source-images/gallery/products_27.jpg';
import i_gallery_products_28_jpg from '../../source-images/gallery/products_28.jpg';
import i_gallery_products_29_jpg from '../../source-images/gallery/products_29.jpg';
import i_gallery_products_30_jpg from '../../source-images/gallery/products_30.jpg';
import i_gallery_products_31_jpg from '../../source-images/gallery/products_31.jpg';
import i_gallery_products_32_jpg from '../../source-images/gallery/products_32.jpg';
import i_gallery_products_33_jpg from '../../source-images/gallery/products_33.jpg';
import i_gallery_products_34_jpg from '../../source-images/gallery/products_34.jpg';
import i_gallery_products_35_jpg from '../../source-images/gallery/products_35.jpg';
import i_gallery_products_36_jpg from '../../source-images/gallery/products_36.jpg';
import i_gallery_products_37_jpg from '../../source-images/gallery/products_37.jpg';
import i_gallery_products_38_jpg from '../../source-images/gallery/products_38.jpg';
import i_gallery_products_39_jpg from '../../source-images/gallery/products_39.jpg';
import i_gallery_products_40_jpg from '../../source-images/gallery/products_40.jpg';

/** Keyed by the same `/source-images/...` path the captured Markdown uses (URL-decoded). */
export const IMAGES: Record<string, ImageMetadata> = {
  '/source-images/shared/alert-engineering-works-logo.png': i_shared_alert_engineering_works_logo_png,
  '/source-images/shared/favicon.png': i_shared_favicon_png,
  '/source-images/shared/banner.png': i_shared_banner_png,
  '/source-images/about-us/alert1_1771251175535.jpg': i_about_us_alert1_1771251175535_jpg,
  '/source-images/about-us/alert2_1771250748749.jpg': i_about_us_alert2_1771250748749_jpg,
  '/source-images/about-us/alert3_1771250759684.jpg': i_about_us_alert3_1771250759684_jpg,
  '/source-images/certification/alertiso_1791458416987.jpg': i_certification_alertiso_1791458416987_jpg,
  '/source-images/certification/certificate_alert_1782881638369.jpg': i_certification_certificate_alert_1782881638369_jpg,
  '/source-images/Aluminium-Foundry/Aluminium foundry1.jpeg': i_Aluminium_Foundry_Aluminium_foundry1_jpeg,
  '/source-images/Aluminium-Foundry/aluminium_foundry2.jpg': i_Aluminium_Foundry_aluminium_foundry2_jpg,
  '/source-images/Aluminium-Foundry/aluminium_foundry3.jpg': i_Aluminium_Foundry_aluminium_foundry3_jpg,
  '/source-images/Aluminium-Foundry/aluminium_foundry4.jpg': i_Aluminium_Foundry_aluminium_foundry4_jpg,
  '/source-images/Aluminium-Foundry/aluminium_foundry5.jpg': i_Aluminium_Foundry_aluminium_foundry5_jpg,
  '/source-images/Machine-Shop/machine_shop1.jpg': i_Machine_Shop_machine_shop1_jpg,
  '/source-images/Machine-Shop/machine_shop2.jpg': i_Machine_Shop_machine_shop2_jpg,
  '/source-images/Machine-Shop/machine_shop3.jpg': i_Machine_Shop_machine_shop3_jpg,
  '/source-images/Machine-Shop/Mercury Machine Tools Services.jpeg': i_Machine_Shop_Mercury_Machine_Tools_Services_jpeg,
  '/source-images/Machine-Shop/Jyoti CNC  Automation Limited.png': i_Machine_Shop_Jyoti_CNC_Automation_Limited_png,
  '/source-images/Casting-Design/casting1.jpg': i_Casting_Design_casting1_jpg,
  '/source-images/Casting-Design/casting2.jpg': i_Casting_Design_casting2_jpg,
  '/source-images/Casting-Design/casting3.jpg': i_Casting_Design_casting3_jpg,
  '/source-images/Tool-Making/tool1.jpg': i_Tool_Making_tool1_jpg,
  '/source-images/Tool-Making/tool2.jpg': i_Tool_Making_tool2_jpg,
  '/source-images/Tool-Making/tool4.jpg': i_Tool_Making_tool4_jpg,
  '/source-images/Tool-Making/tool3.jpg': i_Tool_Making_tool3_jpg,
  '/source-images/Foundry-Quality-Control/foundry-quality.png': i_Foundry_Quality_Control_foundry_quality_png,
  '/source-images/Foundry-Quality-Control/Quality-control-2.jpg': i_Foundry_Quality_Control_Quality_control_2_jpg,
  '/source-images/Foundry-Quality-Control/Quality-control-3.jpg': i_Foundry_Quality_Control_Quality_control_3_jpg,
  '/source-images/Foundry-Quality-Control/melt-quality-equipment1.jpg': i_Foundry_Quality_Control_melt_quality_equipment1_jpg,
  '/source-images/Foundry-Quality-Control/melt-quality-equipment2.jpg': i_Foundry_Quality_Control_melt_quality_equipment2_jpg,
  '/source-images/gallery/1.jpeg': i_gallery_1_jpeg,
  '/source-images/gallery/2.jpeg': i_gallery_2_jpeg,
  '/source-images/gallery/3.jpeg': i_gallery_3_jpeg,
  '/source-images/gallery/4.jpeg': i_gallery_4_jpeg,
  '/source-images/gallery/5.jpeg': i_gallery_5_jpeg,
  '/source-images/gallery/6.jpeg': i_gallery_6_jpeg,
  '/source-images/gallery/7.jpeg': i_gallery_7_jpeg,
  '/source-images/gallery/8.png': i_gallery_8_png,
  '/source-images/gallery/9.png': i_gallery_9_png,
  '/source-images/gallery/10.png': i_gallery_10_png,
  '/source-images/gallery/11.png': i_gallery_11_png,
  '/source-images/gallery/1.png': i_gallery_1_png,
  '/source-images/gallery/3.png': i_gallery_3_png,
  '/source-images/gallery/2.png': i_gallery_2_png,
  '/source-images/gallery/4.png': i_gallery_4_png,
  '/source-images/gallery/products-59.jpeg': i_gallery_products_59_jpeg,
  '/source-images/gallery/products-60.jpeg': i_gallery_products_60_jpeg,
  '/source-images/gallery/products-61.jpeg': i_gallery_products_61_jpeg,
  '/source-images/gallery/products-62.jpeg': i_gallery_products_62_jpeg,
  '/source-images/gallery/products-63.jpeg': i_gallery_products_63_jpeg,
  '/source-images/gallery/products-64.jpeg': i_gallery_products_64_jpeg,
  '/source-images/gallery/products-65.jpeg': i_gallery_products_65_jpeg,
  '/source-images/gallery/products-43.jpeg': i_gallery_products_43_jpeg,
  '/source-images/gallery/products-44.jpeg': i_gallery_products_44_jpeg,
  '/source-images/gallery/products-45.jpeg': i_gallery_products_45_jpeg,
  '/source-images/gallery/products-46.jpeg': i_gallery_products_46_jpeg,
  '/source-images/gallery/products-48.jpeg': i_gallery_products_48_jpeg,
  '/source-images/gallery/products-49.jpeg': i_gallery_products_49_jpeg,
  '/source-images/gallery/products-50.jpeg': i_gallery_products_50_jpeg,
  '/source-images/gallery/products-51.jpeg': i_gallery_products_51_jpeg,
  '/source-images/gallery/products-52.jpeg': i_gallery_products_52_jpeg,
  '/source-images/gallery/products-53.jpeg': i_gallery_products_53_jpeg,
  '/source-images/gallery/products-54.jpeg': i_gallery_products_54_jpeg,
  '/source-images/gallery/products-55.jpeg': i_gallery_products_55_jpeg,
  '/source-images/gallery/Aluminium Reserve Dise1.jpeg': i_gallery_Aluminium_Reserve_Dise1_jpeg,
  '/source-images/gallery/aluminium-motor-body.jpeg': i_gallery_aluminium_motor_body_jpeg,
  '/source-images/gallery/Aluminium Reserve Dise2.jpeg': i_gallery_Aluminium_Reserve_Dise2_jpeg,
  '/source-images/gallery/products_01.jpg': i_gallery_products_01_jpg,
  '/source-images/gallery/products_42.jpeg': i_gallery_products_42_jpeg,
  '/source-images/gallery/products_02.jpg': i_gallery_products_02_jpg,
  '/source-images/gallery/products_03.jpg': i_gallery_products_03_jpg,
  '/source-images/gallery/products_04.jpg': i_gallery_products_04_jpg,
  '/source-images/gallery/products_05.jpg': i_gallery_products_05_jpg,
  '/source-images/gallery/products_06.jpg': i_gallery_products_06_jpg,
  '/source-images/gallery/products_07.jpg': i_gallery_products_07_jpg,
  '/source-images/gallery/products_08.jpg': i_gallery_products_08_jpg,
  '/source-images/gallery/products_09.jpg': i_gallery_products_09_jpg,
  '/source-images/gallery/products_10.jpg': i_gallery_products_10_jpg,
  '/source-images/gallery/products_11.jpg': i_gallery_products_11_jpg,
  '/source-images/gallery/products_12.jpg': i_gallery_products_12_jpg,
  '/source-images/gallery/products_13.jpg': i_gallery_products_13_jpg,
  '/source-images/gallery/products_14.jpg': i_gallery_products_14_jpg,
  '/source-images/gallery/products_15.jpg': i_gallery_products_15_jpg,
  '/source-images/gallery/products_16.jpg': i_gallery_products_16_jpg,
  '/source-images/gallery/products_17.jpg': i_gallery_products_17_jpg,
  '/source-images/gallery/products_18.jpg': i_gallery_products_18_jpg,
  '/source-images/gallery/products_19.jpg': i_gallery_products_19_jpg,
  '/source-images/gallery/products_20.jpg': i_gallery_products_20_jpg,
  '/source-images/gallery/products_21.jpg': i_gallery_products_21_jpg,
  '/source-images/gallery/products_22.jpg': i_gallery_products_22_jpg,
  '/source-images/gallery/products_23.jpg': i_gallery_products_23_jpg,
  '/source-images/gallery/products_24.jpg': i_gallery_products_24_jpg,
  '/source-images/gallery/products_25.jpg': i_gallery_products_25_jpg,
  '/source-images/gallery/products_26.jpg': i_gallery_products_26_jpg,
  '/source-images/gallery/products_27.jpg': i_gallery_products_27_jpg,
  '/source-images/gallery/products_28.jpg': i_gallery_products_28_jpg,
  '/source-images/gallery/products_29.jpg': i_gallery_products_29_jpg,
  '/source-images/gallery/products_30.jpg': i_gallery_products_30_jpg,
  '/source-images/gallery/products_31.jpg': i_gallery_products_31_jpg,
  '/source-images/gallery/products_32.jpg': i_gallery_products_32_jpg,
  '/source-images/gallery/products_33.jpg': i_gallery_products_33_jpg,
  '/source-images/gallery/products_34.jpg': i_gallery_products_34_jpg,
  '/source-images/gallery/products_35.jpg': i_gallery_products_35_jpg,
  '/source-images/gallery/products_36.jpg': i_gallery_products_36_jpg,
  '/source-images/gallery/products_37.jpg': i_gallery_products_37_jpg,
  '/source-images/gallery/products_38.jpg': i_gallery_products_38_jpg,
  '/source-images/gallery/products_39.jpg': i_gallery_products_39_jpg,
  '/source-images/gallery/products_40.jpg': i_gallery_products_40_jpg,
};
