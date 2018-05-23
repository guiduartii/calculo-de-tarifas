import React, { Component } from "react";
import { Icon, Anchor } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/LogoLandingPage.png";
import LogoSenaiNovo from "../../assets/images/senai-logo-new.svg"
import DrawDifference from "../../assets/images/tarifa.svg";
import Footer from "../../components/Footer";
import "./landingPage.less";
import "./grafismo.less"

const LinkAnchor = Anchor.Link;

class LandingPage extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <section className="banner">
          <div className="content-banner">
            <div>
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <h1 className="title">
                A tarifa branca já está em vigor na sua conta de luz
              </h1>
              <h2 className="subtitle">
                Veja o quanto economizará com essa nova opção.
              </h2>
            </div>
            <div className="content-links">
              <Link to="/list" className="btn-calculate">
                Calcular tarifa
              </Link>
              <Anchor affix={false}>
                <LinkAnchor
                  href="#white-tariff"
                  title={<div className="underlined-button"><span className="link-difference">Qual a diferença entre as tarifas?</span><span className="border-hover"></span></div>}
                />
              </Anchor>
            </div>
          </div>
          <div className="senai-top">
            <img src={LogoSenaiNovo} alt="logo do senai" />
          </div>
        </section>
        <section className="sobre">
          <div className="description">
            <div className="title">
              <h1 className="title-difference">Qual a diferença?</h1>
              <span className="border-bottom" />
            </div>
            <p>
              A tarifa branca é um nova opção que sinaliza aos consumidores a variação do valor de energia de acordo com o dia e o horário
              de consumo.
              A tarifa convencional é caracterizada por tarifas de consumo de energia, sem considerar as horas de utilização.
                  </p>
          </div>
          <svg viewBox="0 0 553.74 1215.95" className="grafismo">
            <defs>
              <clipPath id="clip-path">
                <rect class="cls-1" x="168.85" y="610.59" width="198.75" height="96.98" />
              </clipPath>
              <clipPath id="clip-path-2">
                <rect class="cls-1" x="168.85" y="508.37" width="196.03" height="102.22" />
              </clipPath>
            </defs>
            <title>Ativo 4</title>
            <g class="cls-2">
              <g id="Camada_2" data-name="Camada 2">
                <g id="Camada_1-2" data-name="Camada 1">
                  <rect class="cls-3" x="526.55" y="302.1" width="27.19" height="1.12" />
                  <rect class="cls-3" x="526.55" y="338.09" width="27.19" height="1.12" />
                  <path class="cls-4" d="M527.67,353.76h-1.12a33.11,33.11,0,1,1,0-66.22h1.12Zm-2.24-64a30.87,30.87,0,0,0,0,61.69Z"
                  />
                  <rect class="cls-4" x="373.28" y="318.79" width="31.57" height="9.12" />
                  <rect class="cls-4" x="373.28" y="247.01" width="31.57" height="9.12" />
                  <path class="cls-4" d="M493.44,539.75v83.12a52.75,52.75,0,1,1-105.5,0V379.3h2.25V622.87a50.51,50.51,0,1,0,101,0V539.75Z"
                  />
                  <rect class="cls-3" x="387.94" y="256.13" width="2.24" height="2.24" />
                  <path class="cls-3" d="M387.94,262.64v4.26h2.25v-4.26Zm0,8.53v4.26h2.25v-4.26Zm0,8.52V284h2.25v-4.27Zm0,8.53v4.26h2.25v-4.26Zm0,8.53V301h2.25v-4.26Z"
                  />
                  <rect class="cls-3" x="387.94" y="305.27" width="2.24" height="2.24" />
                  <polygon class="cls-3" points="429.37 528.62 428.25 528.62 428.25 497.5 405.13 474.39 405.13 449.62 406.25 449.62 406.25 473.92 429.37 497.04 429.37 528.62"
                  />
                  <polygon class="cls-3" points="447 528.62 445.88 528.62 445.88 497.5 422.76 474.39 422.76 449.62 423.88 449.62 423.88 473.92 447 497.04 447 528.62"
                  />
                  <polygon class="cls-3" points="464.64 528.62 463.52 528.62 463.52 497.5 440.4 474.39 440.4 449.62 441.52 449.62 441.52 473.92 464.64 497.04 464.64 528.62"
                  />
                  <polygon class="cls-3" points="482.28 528.62 481.15 528.62 481.15 497.5 458.04 474.39 458.04 449.62 459.16 449.62 459.16 473.92 482.28 497.04 482.28 528.62"
                  />
                  <g class="cls-5">
                    <path class="cls-6" d="M469.46,1174.18A62.22,62.22,0,1,1,531.68,1112,62.29,62.29,0,0,1,469.46,1174.18Zm0-123.12a60.9,60.9,0,1,0,60.9,60.9A61,61,0,0,0,469.46,1051.06Z"
                    />
                  </g>
                  <g class="cls-5">
                    <circle class="cls-4" cx="206.81" cy="1202.8" r="11.7" />
                  </g>
                  <path class="cls-6" d="M299.4,1203.3h-1.86v-1h1.86Zm-4.16,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1H286Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0H270v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0H247v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0H224v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0H201v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1H185Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1H162Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1H139Zm-4.59,0h-2.3v-1h2.3Zm-4.59,0h-2.3v-1h2.3Z"
                  />
                  <polygon class="cls-6" points="506.36 793.4 507.36 793.4 507.36 771.01 520.7 766.06 499.09 759.79 520.66 752.48 498.98 745.13 520.77 737.75 499.05 731.44 508.76 728 508.76 710.85 507.76 710.85 507.76 727.29 495.78 731.54 517.43 737.82 495.85 745.13 517.54 752.48 495.75 759.86 517.51 766.18 506.36 770.32 506.36 793.4"
                  />
                  <polygon class="cls-7" points="471.36 1215.45 470.36 1215.45 470.36 1193.06 457.02 1188.11 478.63 1181.83 457.06 1174.53 478.74 1167.18 456.95 1159.8 478.67 1153.49 468.96 1150.05 468.96 1132.9 469.96 1132.9 469.96 1149.34 481.94 1153.59 460.29 1159.87 481.87 1167.18 460.18 1174.53 481.98 1181.91 460.21 1188.23 471.36 1192.37 471.36 1215.45"
                  />
                  <g class="cls-5">
                    <rect class="cls-4" x="390.98" y="752.12" width="156.97" height="156.97" />
                  </g>
                  <rect class="cls-4" x="81.03" y="799.04" width="107.14" height="30.59" />
                  <path class="cls-8" d="M445.71,785.13H317.79a58.07,58.07,0,0,0-34.84,11.61l-6.11,4.58A58.07,58.07,0,0,1,242,812.94H0"
                  />
                  <path class="cls-9" d="M462.13,835c-2.06,1-107.44.32-142.31.08" />
                  <rect class="cls-4" x="411.07" y="170.69" width="107.14" height="30.59" />
                  <line class="cls-10" x1="480.42" y1="30.5" x2="480.42" y2="216.49" />
                  <line class="cls-10" x1="389" y1="137.99" x2="389" y2="222.26" />
                  <line class="cls-10" x1="389" x2="389" y2="42.5" />
                  <line class="cls-10" x1="432.42" y1="137.99" x2="432.42" y2="216.49" />
                  <line class="cls-10" x1="432.42" y1="55.5" x2="432.42" y2="93" />
                  <rect class="cls-4" x="254.06" y="286.75" width="25.03" height="73.73" />
                  <line class="cls-10" x1="266.57" y1="385.4" x2="266.57" y2="256.58" />
                  <rect class="cls-3" x="491.2" y="539.75" width="2.24" height="73.31" />
                  <line class="cls-10" x1="389" y1="327.91" x2="389" y2="379.3" />
                  <g class="cls-11">
                    <g class="cls-5">
                      <circle class="cls-6" cx="266.01" cy="609.23" r="16.72" />
                    </g>
                    <path class="cls-6" d="M266,687.81a78.58,78.58,0,1,1,78.58-78.58A78.67,78.67,0,0,1,266,687.81Zm0-155.39a76.81,76.81,0,1,0,76.81,76.81A76.9,76.9,0,0,0,266,532.42Z"
                    />
                    <path class="cls-6" d="M265.82,678.34q-1.36,0-2.72-.06l.07-1.77q1.32.06,2.65.06Zm2.72,0-.07-1.77c.89,0,1.77-.08,2.65-.15l.13,1.76C270.35,678.22,269.44,678.27,268.54,678.3Zm-8.15-.18c-.91-.07-1.81-.16-2.71-.27l.21-1.76c.87.11,1.75.19,2.63.26Zm13.57-.23-.2-1.76c.88-.1,1.76-.22,2.63-.35l.27,1.75Q275.31,677.74,274,677.89Zm-19-.42q-1.35-.22-2.68-.49l.35-1.73q1.29.26,2.6.47Zm24.34-.4-.34-1.74q1.31-.26,2.59-.56l.41,1.72Q280.67,676.8,279.33,677.06Zm-29.67-.67q-1.32-.32-2.63-.69l.48-1.7q1.27.36,2.56.68Zm35-.59-.47-1.7q1.28-.35,2.54-.76l.54,1.68Q285.93,675.44,284.62,675.81Zm-40.19-.9q-1.3-.42-2.58-.9l.62-1.66c.83.31,1.66.6,2.51.88Zm45.36-.77-.61-1.66q1.25-.45,2.47-1l.67,1.64Q291.07,673.67,289.79,674.14ZM239.32,673q-1.26-.53-2.49-1.1l.75-1.6q1.2.56,2.43,1.07Zm55.49-.93-.74-1.6q1.21-.55,2.38-1.15l.8,1.57Q296.05,671.51,294.81,672.07Zm-60.43-1.38c-.81-.41-1.6-.85-2.39-1.29l.87-1.54q1.16.65,2.34,1.26Zm65.27-1.08-.86-1.55q1.16-.64,2.29-1.33l.92,1.51Q300.84,669,299.65,669.62Zm-70-1.6q-1.16-.72-2.29-1.48l1-1.46q1.1.74,2.23,1.44Zm74.64-1.23-1-1.47q1.1-.74,2.17-1.51l1,1.43C305.78,665.77,305,666.29,304.28,666.79ZM225.14,665q-1.1-.81-2.16-1.66l1.1-1.38q1,.83,2.11,1.61Zm83.54-1.37-1.09-1.39q1-.82,2-1.68l1.15,1.35Q309.75,662.76,308.68,663.6Zm-87.8-2q-1-.89-2-1.82l1.21-1.29q1,.9,2,1.77Zm91.94-1.51-1.2-1.3q1-.9,1.91-1.83l1.25,1.25Q313.82,659.16,312.82,660.08Zm-95.91-2.21q-1-1-1.88-2l1.3-1.2q.9,1,1.83,1.92Zm99.76-1.63-1.3-1.2q.9-1,1.77-2l1.34,1.15Q317.6,655.24,316.67,656.24Zm-103.43-2.38q-.88-1-1.72-2.11l1.39-1.09q.82,1,1.67,2.05Zm107-1.74-1.39-1.1q.82-1,1.61-2.11l1.43,1Q321.06,651.05,320.21,652.12Zm-110.32-2.54c-.53-.73-1-1.48-1.54-2.23l1.47-1q.73,1.11,1.51,2.18Zm113.53-1.86-1.47-1c.49-.74,1-1.48,1.44-2.23l1.51.93Q324.18,646.59,323.42,647.72Zm-116.53-2.66q-.7-1.16-1.36-2.35l1.54-.86c.43.77.87,1.54,1.33,2.29Zm119.38-2-1.54-.87q.65-1.16,1.26-2.34l1.57.8Q326.94,641.9,326.28,643.09Zm-122-2.78q-.61-1.21-1.17-2.45l1.61-.73q.55,1.2,1.14,2.38Zm124.5-2.07-1.6-.74q.56-1.21,1.07-2.43l1.63.68Q329.33,637,328.76,638.24ZM202,635.37q-.51-1.25-1-2.54l1.66-.6c.3.83.62,1.65,1,2.47Zm128.84-2.17-1.66-.61c.31-.83.6-1.66.87-2.51l1.68.55Q331.32,631.93,330.85,633.21Zm-130.69-2.94q-.41-1.29-.78-2.61l1.7-.47q.35,1.28.76,2.54ZM332.53,628l-1.7-.48q.36-1.27.67-2.56l1.72.41Q332.9,626.72,332.53,628Zm-133.83-3c-.21-.88-.39-1.77-.57-2.66l1.74-.34q.25,1.31.55,2.59Zm135.09-2.28-1.73-.35c.17-.86.33-1.73.46-2.61l1.75.27Q334.07,621.41,333.8,622.74Zm-136.12-3.06c-.14-.89-.25-1.79-.36-2.7l1.76-.19q.15,1.32.34,2.62Zm137-2.32-1.75-.21c.1-.87.19-1.75.26-2.63l1.76.14Q334.81,616,334.65,617.37Zm-137.57-3.09q-.1-1.35-.14-2.71l1.77-.06c0,.88.08,1.77.14,2.65Zm138-2.33-1.76-.07c0-.88.05-1.76.05-2.65h1.77C335.12,610.14,335.1,611,335.07,611.95Zm-136.4-3.09H196.9c0-.91,0-1.82.07-2.72l1.76.08C198.69,607.09,198.67,608,198.67,608.86Zm134.66-1.53q0-1.33-.13-2.65l1.76-.12q.09,1.35.13,2.71ZM198.9,603.56l-1.76-.15c.08-.91.17-1.81.28-2.71l1.75.22Q199,602.24,198.9,603.56ZM333,602c-.09-.88-.2-1.76-.33-2.63l1.75-.26q.19,1.34.34,2.7Zm-133.43-3.73L197.8,598q.22-1.35.49-2.68l1.73.36C199.85,596.56,199.69,597.43,199.55,598.31Zm132.66-1.51c-.16-.87-.34-1.73-.54-2.59l1.72-.39q.3,1.32.55,2.66Zm-131.6-3.68-1.72-.42q.33-1.33.7-2.63l1.7.49C201,591.4,200.82,592.26,200.61,593.12ZM331,591.64q-.35-1.28-.74-2.55l1.69-.52q.41,1.29.76,2.61Zm-129-3.61-1.68-.56q.43-1.3.91-2.57l1.65.62Q202.49,586.76,202.07,588Zm127.38-1.45q-.45-1.25-.94-2.48l1.64-.66q.51,1.26,1,2.54Zm-125.51-3.52-1.63-.69q.53-1.26,1.11-2.49l1.6.75Q204.46,581.83,203.94,583.06Zm123.53-1.39q-.54-1.21-1.13-2.39l1.58-.79q.6,1.21,1.16,2.45ZM206.2,578.25l-1.57-.81q.63-1.21,1.3-2.39l1.53.88Q206.81,577.07,206.2,578.25Zm118.92-1.31q-.64-1.16-1.32-2.3l1.52-.91q.7,1.16,1.35,2.35Zm-116.29-3.3-1.5-.94q.72-1.15,1.49-2.28l1.46,1Q209.53,572.52,208.83,573.64ZM322.4,572.4q-.72-1.11-1.49-2.19l1.44-1q.79,1.11,1.53,2.24Zm-110.59-3.15-1.42-1q.81-1.1,1.66-2.16l1.38,1.1Q212.6,568.19,211.81,569.26Zm107.53-1.17q-.81-1-1.66-2.06l1.36-1.14q.87,1,1.7,2.12Zm-104.21-3L213.79,564q.89-1,1.82-2l1.29,1.21Q216,564.12,215.12,565.12ZM315.93,564q-.89-1-1.82-1.93l1.26-1.24q1,1,1.87,2Zm-97.18-2.77L217.51,560q1-1,2-1.87l1.19,1.31Q219.69,560.33,218.75,561.26Zm93.47-1q-1-.91-2-1.78l1.16-1.33q1,.89,2,1.83Zm-89.56-2.56-1.14-1.35q1-.87,2.11-1.71l1.09,1.39Q223.68,556.84,222.66,557.69Zm85.57-.93q-1-.83-2.1-1.62l1.06-1.42q1.09.81,2.15,1.67Zm-81.38-2.32-1-1.44q1.11-.79,2.24-1.54l1,1.48Q227.92,553.67,226.84,554.44ZM304,553.6q-1.1-.75-2.22-1.45l.94-1.5q1.15.72,2.28,1.49Zm-72.71-2.07-.91-1.51q1.16-.7,2.35-1.36l.85,1.55Q232.4,550.85,231.26,551.53Zm68.22-.75q-1.15-.66-2.33-1.28l.82-1.57q1.21.63,2.39,1.31ZM235.89,549l-.79-1.58q1.21-.61,2.45-1.17l.73,1.61Q237.08,548.39,235.89,549Zm58.88-.66q-1.2-.57-2.42-1.09l.69-1.63q1.25.53,2.49,1.12Zm-54.07-1.52-.66-1.64q1.26-.51,2.54-1l.6,1.66Q241.93,546.31,240.71,546.8Zm49.19-.56q-1.24-.47-2.5-.89l.56-1.68q1.3.43,2.57.92ZM245.69,545l-.53-1.69q1.29-.41,2.61-.77l.47,1.7Q247,544.61,245.69,545Zm39.17-.45q-1.27-.37-2.56-.69l.43-1.71q1.32.33,2.62.71Zm-34.06-.95-.4-1.72q1.32-.3,2.66-.56l.33,1.74Q252.09,543.32,250.8,543.61Zm28.92-.33q-1.29-.27-2.6-.49l.29-1.74q1.35.22,2.67.5ZM256,542.63l-.26-1.75q1.34-.2,2.7-.35l.19,1.76Q257.31,542.43,256,542.63Zm18.49-.21q-1.31-.17-2.64-.28l.15-1.76q1.36.12,2.7.29Zm-13.22-.36-.12-1.76q1.35-.09,2.72-.14l.06,1.77Q262.59,542,261.27,542.05Zm7.95-.09q-1.32-.06-2.65-.07l0-1.77q1.36,0,2.72.08Z"
                    />
                    <g class="cls-5">
                      <rect class="cls-4" x="264.67" y="517.29" width="2.68" height="23.72" />
                    </g>
                    <g class="cls-5">
                      <rect class="cls-4" x="264.67" y="677.46" width="2.68" height="23.72" />
                    </g>
                    <g class="cls-5">
                      <rect class="cls-4" x="175.56" y="608.07" width="23.72" height="2.68" />
                    </g>
                    <g class="cls-5">
                      <rect class="cls-4" x="335.73" y="608.07" width="23.72" height="2.68" />
                    </g>
                  </g>
                  <g class="cls-12">
                    <g class="cls-5">
                      <circle class="cls-13" cx="266.01" cy="609.23" r="16.72" />
                    </g>
                    <path class="cls-3" d="M266,687.81a78.58,78.58,0,1,1,78.58-78.58A78.67,78.67,0,0,1,266,687.81Zm0-155.39a76.81,76.81,0,1,0,76.81,76.81A76.9,76.9,0,0,0,266,532.42Z"
                    />
                    <path class="cls-3" d="M265.82,678.34q-1.36,0-2.72-.06l.07-1.77q1.32.06,2.65.06Zm2.72,0-.07-1.77c.89,0,1.77-.08,2.65-.15l.13,1.76C270.35,678.22,269.44,678.27,268.54,678.3Zm-8.15-.18c-.91-.07-1.81-.16-2.71-.27l.21-1.76c.87.11,1.75.19,2.63.26Zm13.57-.23-.2-1.76c.88-.1,1.76-.22,2.63-.35l.27,1.75Q275.31,677.74,274,677.89Zm-19-.42q-1.35-.22-2.68-.49l.35-1.73q1.29.26,2.6.47Zm24.34-.4-.34-1.74q1.31-.26,2.59-.56l.41,1.72Q280.67,676.8,279.33,677.06Zm-29.67-.67q-1.32-.32-2.63-.69l.48-1.7q1.27.36,2.56.68Zm35-.59-.47-1.7q1.28-.35,2.54-.76l.54,1.68Q285.93,675.44,284.62,675.81Zm-40.19-.9q-1.3-.42-2.58-.9l.62-1.66c.83.31,1.66.6,2.51.88Zm45.36-.77-.61-1.66q1.25-.45,2.47-1l.67,1.64Q291.07,673.67,289.79,674.14ZM239.32,673q-1.26-.53-2.49-1.1l.75-1.6q1.2.56,2.43,1.07Zm55.49-.93-.74-1.6q1.21-.55,2.38-1.15l.8,1.57Q296.05,671.51,294.81,672.07Zm-60.43-1.38c-.81-.41-1.6-.85-2.39-1.29l.87-1.54q1.16.65,2.34,1.26Zm65.27-1.08-.86-1.55q1.16-.64,2.29-1.33l.92,1.51Q300.84,669,299.65,669.62Zm-70-1.6q-1.16-.72-2.29-1.48l1-1.46q1.1.74,2.23,1.44Zm74.64-1.23-1-1.47q1.1-.74,2.17-1.51l1,1.43C305.78,665.77,305,666.29,304.28,666.79ZM225.14,665q-1.1-.81-2.16-1.66l1.1-1.38q1,.83,2.11,1.61Zm83.54-1.37-1.09-1.39q1-.82,2-1.68l1.15,1.35Q309.75,662.76,308.68,663.6Zm-87.8-2q-1-.89-2-1.82l1.21-1.29q1,.9,2,1.77Zm91.94-1.51-1.2-1.3q1-.9,1.91-1.83l1.25,1.25Q313.82,659.16,312.82,660.08Zm-95.91-2.21q-1-1-1.88-2l1.3-1.2q.9,1,1.83,1.92Zm99.76-1.63-1.3-1.2q.9-1,1.77-2l1.34,1.15Q317.6,655.24,316.67,656.24Zm-103.43-2.38q-.88-1-1.72-2.11l1.39-1.09q.82,1,1.67,2.05Zm107-1.74-1.39-1.1q.82-1,1.61-2.11l1.43,1Q321.06,651.05,320.21,652.12Zm-110.32-2.54c-.53-.73-1-1.48-1.54-2.23l1.47-1q.73,1.11,1.51,2.18Zm113.53-1.86-1.47-1c.49-.74,1-1.48,1.44-2.23l1.51.93Q324.18,646.59,323.42,647.72Zm-116.53-2.66q-.7-1.16-1.36-2.35l1.54-.86c.43.77.87,1.54,1.33,2.29Zm119.38-2-1.54-.87q.65-1.16,1.26-2.34l1.57.8Q326.94,641.9,326.28,643.09Zm-122-2.78q-.61-1.21-1.17-2.45l1.61-.73q.55,1.2,1.14,2.38Zm124.5-2.07-1.6-.74q.56-1.21,1.07-2.43l1.63.68Q329.33,637,328.76,638.24ZM202,635.37q-.51-1.25-1-2.54l1.66-.6c.3.83.62,1.65,1,2.47Zm128.84-2.17-1.66-.61c.31-.83.6-1.66.87-2.51l1.68.55Q331.32,631.93,330.85,633.21Zm-130.69-2.94q-.41-1.29-.78-2.61l1.7-.47q.35,1.28.76,2.54ZM332.53,628l-1.7-.48q.36-1.27.67-2.56l1.72.41Q332.9,626.72,332.53,628Zm-133.83-3c-.21-.88-.39-1.77-.57-2.66l1.74-.34q.25,1.31.55,2.59Zm135.09-2.28-1.73-.35c.17-.86.33-1.73.46-2.61l1.75.27Q334.07,621.41,333.8,622.74Zm-136.12-3.06c-.14-.89-.25-1.79-.36-2.7l1.76-.19q.15,1.32.34,2.62Zm137-2.32-1.75-.21c.1-.87.19-1.75.26-2.63l1.76.14Q334.81,616,334.65,617.37Zm-137.57-3.09q-.1-1.35-.14-2.71l1.77-.06c0,.88.08,1.77.14,2.65Zm138-2.33-1.76-.07c0-.88.05-1.76.05-2.65h1.77C335.12,610.14,335.1,611,335.07,611.95Zm-136.4-3.09H196.9c0-.91,0-1.82.07-2.72l1.76.08C198.69,607.09,198.67,608,198.67,608.86Zm134.66-1.53q0-1.33-.13-2.65l1.76-.12q.09,1.35.13,2.71ZM198.9,603.56l-1.76-.15c.08-.91.17-1.81.28-2.71l1.75.22Q199,602.24,198.9,603.56ZM333,602c-.09-.88-.2-1.76-.33-2.63l1.75-.26q.19,1.34.34,2.7Zm-133.43-3.73L197.8,598q.22-1.35.49-2.68l1.73.36C199.85,596.56,199.69,597.43,199.55,598.31Zm132.66-1.51c-.16-.87-.34-1.73-.54-2.59l1.72-.39q.3,1.32.55,2.66Zm-131.6-3.68-1.72-.42q.33-1.33.7-2.63l1.7.49C201,591.4,200.82,592.26,200.61,593.12ZM331,591.64q-.35-1.28-.74-2.55l1.69-.52q.41,1.29.76,2.61Zm-129-3.61-1.68-.56q.43-1.3.91-2.57l1.65.62Q202.49,586.76,202.07,588Zm127.38-1.45q-.45-1.25-.94-2.48l1.64-.66q.51,1.26,1,2.54Zm-125.51-3.52-1.63-.69q.53-1.26,1.11-2.49l1.6.75Q204.46,581.83,203.94,583.06Zm123.53-1.39q-.54-1.21-1.13-2.39l1.58-.79q.6,1.21,1.16,2.45ZM206.2,578.25l-1.57-.81q.63-1.21,1.3-2.39l1.53.88Q206.81,577.07,206.2,578.25Zm118.92-1.31q-.64-1.16-1.32-2.3l1.52-.91q.7,1.16,1.35,2.35Zm-116.29-3.3-1.5-.94q.72-1.15,1.49-2.28l1.46,1Q209.53,572.52,208.83,573.64ZM322.4,572.4q-.72-1.11-1.49-2.19l1.44-1q.79,1.11,1.53,2.24Zm-110.59-3.15-1.42-1q.81-1.1,1.66-2.16l1.38,1.1Q212.6,568.19,211.81,569.26Zm107.53-1.17q-.81-1-1.66-2.06l1.36-1.14q.87,1,1.7,2.12Zm-104.21-3L213.79,564q.89-1,1.82-2l1.29,1.21Q216,564.12,215.12,565.12ZM315.93,564q-.89-1-1.82-1.93l1.26-1.24q1,1,1.87,2Zm-97.18-2.77L217.51,560q1-1,2-1.87l1.19,1.31Q219.69,560.33,218.75,561.26Zm93.47-1q-1-.91-2-1.78l1.16-1.33q1,.89,2,1.83Zm-89.56-2.56-1.14-1.35q1-.87,2.11-1.71l1.09,1.39Q223.68,556.84,222.66,557.69Zm85.57-.93q-1-.83-2.1-1.62l1.06-1.42q1.09.81,2.15,1.67Zm-81.38-2.32-1-1.44q1.11-.79,2.24-1.54l1,1.48Q227.92,553.67,226.84,554.44ZM304,553.6q-1.1-.75-2.22-1.45l.94-1.5q1.15.72,2.28,1.49Zm-72.71-2.07-.91-1.51q1.16-.7,2.35-1.36l.85,1.55Q232.4,550.85,231.26,551.53Zm68.22-.75q-1.15-.66-2.33-1.28l.82-1.57q1.21.63,2.39,1.31ZM235.89,549l-.79-1.58q1.21-.61,2.45-1.17l.73,1.61Q237.08,548.39,235.89,549Zm58.88-.66q-1.2-.57-2.42-1.09l.69-1.63q1.25.53,2.49,1.12Zm-54.07-1.52-.66-1.64q1.26-.51,2.54-1l.6,1.66Q241.93,546.31,240.71,546.8Zm49.19-.56q-1.24-.47-2.5-.89l.56-1.68q1.3.43,2.57.92ZM245.69,545l-.53-1.69q1.29-.41,2.61-.77l.47,1.7Q247,544.61,245.69,545Zm39.17-.45q-1.27-.37-2.56-.69l.43-1.71q1.32.33,2.62.71Zm-34.06-.95-.4-1.72q1.32-.3,2.66-.56l.33,1.74Q252.09,543.32,250.8,543.61Zm28.92-.33q-1.29-.27-2.6-.49l.29-1.74q1.35.22,2.67.5ZM256,542.63l-.26-1.75q1.34-.2,2.7-.35l.19,1.76Q257.31,542.43,256,542.63Zm18.49-.21q-1.31-.17-2.64-.28l.15-1.76q1.36.12,2.7.29Zm-13.22-.36-.12-1.76q1.35-.09,2.72-.14l.06,1.77Q262.59,542,261.27,542.05Zm7.95-.09q-1.32-.06-2.65-.07l0-1.77q1.36,0,2.72.08Z"
                    />
                    <g class="cls-5">
                      <rect class="cls-4" x="264.67" y="517.29" width="2.68" height="23.72" />
                    </g>
                    <g class="cls-5">
                      <rect class="cls-4" x="264.67" y="677.46" width="2.68" height="23.72" />
                    </g>
                    <g class="cls-5">
                      <rect class="cls-4" x="175.56" y="608.07" width="23.72" height="2.68" />
                    </g>
                    <g class="cls-5">
                      <rect class="cls-4" x="335.73" y="608.07" width="23.72" height="2.68" />
                    </g>
                  </g>
                  <circle class="cls-4" cx="469.46" cy="1110.1" r="2.51" />
                  <rect class="cls-6" x="231.45" y="1051.6" width="1.12" height="27.19" />
                  <rect class="cls-6" x="195.47" y="1051.6" width="1.12" height="27.19" />
                  <path class="cls-4" d="M180.91,1052.73v-1.12a33.11,33.11,0,0,1,66.22,0v1.12Zm64-2.24a30.87,30.87,0,0,0-61.69,0Z"
                  />
                  <circle class="cls-4" cx="257.73" cy="914.48" r="2.51" />
                  <path class="cls-14" d="M214,1041.72v-21a21.85,21.85,0,0,1,21.85-21.85h0A21.85,21.85,0,0,0,257.73,977v-38.2"
                  />
                </g>
              </g>
            </g>
          </svg>
        </section>
        <div id="white-tariff">
          <section className="white-tariff">
            <div className="about">
              <div className="difference-tariffs">
                <div className="content-difference">
                  <div>
                    <img
                      src={DrawDifference}
                      className="illustration-difference"
                      alt=""
                    />
                  </div>
                  <div className="calculate-tariffs">
                    <Link to="/list" className="btn-calculate-tariff">
                      Calcular tarifa
                    </Link>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer className="footer-landing" />
      </div>
    );
  }
}
export default LandingPage;