import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YahyaSaad from "../Images/YahyaSaad.jpg";
import Abdohamdy from "../Images/Abdohamdy.jpg";
import ElHawary from "../Images/ElHawary.jpg";
import github from "../Images/YahyaSaad.jpg";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavTeam from "../components/NavTeam";

function Team(){
    return(
        <div>
            <NavTeam/>
            <div className="p-3 pt-5" style={{backgroundColor:'#F0F0F0'}}>
                <div className="mt-5">
                    <h2 className="bbb text-center">نبذة عن فريق عمل مشروع اجازاتي</h2>
                </div>

                <div className="mt-5 bbbb box-team p-2">
                    <ul>
                        <li>نحن فريق عمل المشروع ، نتكون من ثمانية اشخاص .</li>
                        <li>التحقنا بكلية الحاسبات والمعلومات جامعة جنوب الوادي بقنا عام 2021 .</li>
                        <li>من القسمين علوم الحاسب وتكنولوجيا المعلومات .</li>
                        <li>وكان لكل منّا دوره فى المشروع ونجاحه .</li>
                    </ul>
                </div>

                <div className="mt-5 p-4" style={{backgroundColor:'#D6D6D6'}}>
                    <div>
                        <h2 className="bbb text-center">فريق عمل المشروع</h2>
                    </div>

                    <div className="mt-3 bg-light p-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                                <div className="pic"><img src={YahyaSaad} alt="teamImg" /></div>
                                <div className="desc text-center">
                                    <div className="mb-3 box-team p-2 d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <h4 className="text-bold">يحيى سعد عبدالموجود</h4>
                                            <p>Front End Developer</p>
                                        </div>
                                        <div className="d-flex social">
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                                <div className="pic"><img src={Abdohamdy} alt="teamImg" /></div>
                                <div className="desc text-center">
                                    <div className="mb-3 box-team p-2 d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <h4 className="text-bold">عبدالرحمن حمدي توفيق</h4>
                                            <p>Front End Developer</p>
                                        </div>
                                        <div className="d-flex social">
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                                <div className="pic"><img src={ElHawary} alt="teamImg" /></div>
                                <div className="desc text-center">
                                    <div className="mb-3 box-team p-2 d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <h4 className="text-bold">محمود نصرالدين حافظ</h4>
                                            <p>Front End Developer</p>
                                        </div>

                                        <div className="social">
                                            <Link className="p-1 bg-light" to={`https://wa.me//201127471188`} type="submit">
                                                <img style={{ width: "32px" }}
                                                    src={github}                                                                                                alt={"member.firstName"}
                                                />
                                            </Link>

                                            <Link className="p-1 bg-light" to={`https://wa.me//201127471188`} type="submit">
                                                <img style={{ width: "32px" }}
                                                    src={
                                                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAdVBMVEX///82uyIAtAA8vSkyuhwAsgAsuRMatgAkuAD6/fry+vHr9+pAvi31+/Tv+e7a8Njh899JwTfV7tPP7MzC575Vw0h6znFRxEDK6sfm9eS75Les3qiC0Hq24rKS1Y5symKi25yN1IZfxlNlx1p0zGqZ15RGvj+x1v7tAAARVklEQVR4nM1da7uiIBBOJUCjktSstPJS/f+fuNoFUEHxenY+7bPnHOV1hmHurFaT0j7JIcIQGFKyLPZPADEi8WU37eunIttxrw9zjaAcRwNNCQibayP1dtu/XnuV7M0hypCJ24BI0JSAkAli3/1/OLTzohy1s0SN5s0gI/b3/wN/7P0lBqYeEgWaN57g6W/+GsrpmSGs2O890BgGRMYx2v8llkscQglTCJUvuBVNwR6Q3w5/BeWaEylTKCUhKT92oX6RaZrrD5kmQm+1rUJT6GsYHP8Ejv8y5OdJwRdiQXONw3uaXH1v737o4F+iW5wZhf5WnkQFHnI8Lw3lEKgWBCEyw2Pk7eyCGn9X/uf58szNtanYagCCdFHNdr5L9RcoznWYJVrbeHtKKYIQSBABBKPF4OwShKRflLxuhyYz1ORcHi8LSDgMzMDr86DBtD0FZuP1xYpeuR5LqmT7aUZhEw80U3f6tdfJvTUlDGL6SAZroe0lzQFqwEHW3Gao7QdmAwrKb/44GXejmDTsIWCms6pp99k4IzG6T3Fwb/3nqwEHBdf5FMEprws3wo/LRMeCfUhedWGDVjrToWNHtPbpCgGb0jq0z5FVU5MA5LOImhMbte9mUt+Z9h32Lqk7RZBcp31HSbuw9hZsRtO/pXjPfV39ZgDdpn7HvqaQIXpM/YofHayaoYOCaV/gVz8XgOGcWjOxqooGWxOK8zYyq1Doc17baf8wKoIArcnctt2tomMAuJ+merSKnCSsoqGnaWy1XVphOjSeSzgc3qPyBeHLnwLNJq2Y6Ti8LGLPrs6JeIQSEkzw3l1c4Yt5XyzoYF8gOw0sSgvejH2iE1f0yvq2ZDzIC36iZoVWsW9GorFjDIQAsbmcB/gm9/FTo5SWu9Ub9bS0/DQ/NBCPZnRf2qVmyZYgJCEtjYExDluy/jD5g4WM+zDD6IlIYAESvqNXYD389PTXP11SYgn+AkvxQel7z5CPoMOhcu5xTU8MmP1VsDGiwCDhV9ZhNgyNK7ovf4dltboSUO6Y70LiIWg2uYAF/yGW1epiEK5RjaT/4emIRgymfxqfX0WCMTDkuIks4e+tv9n7nBLBbIdZXwV9EDYMhLNbyV1kPwU0OO4XUDvfBScZLX5WNslJuWoFKOqzbeynYH/P4+v3pfNdRNNH0A5rgS+3/yF1WiZRBMGn+mvaWfzv0GPx3I+CfMJVkqkfsUn5bvsrI0ZGiXBYrHUFTRAyYM0QghtKdiwKmp4OsEWtnM68wF7kvgTxT7T+JOFqA2YajqXjXS7+YREt4QsazdARNFc4+lG3RbaJjoFlkSxexAkVThsYa/y+IJjms/O3vTvAEJSZWeO+QN5uy4P3gHSf5SfKfh0anZvsRJmGAZAugMYTFO2jUxYExqw7TeVDJYoK4fyhGztmgtataS/8ZEKdmmyPq6kBYM5fN7bhKQL0aP94zpEZmAB2rezcSKEDNL+54AuC1m41XrgqQ9eOHbORFDRBMrsXt+EGfbup5XCJhHnHR7YDWRUjDGZH4/PYN760/N6JMwa2/V5JhZcgq7WaP1qwi9lXxEf1rtlyNwZ3GcteKWN/g4abzwCqzeA9/y2jQ+3Z9/eGkaOZWdK2nDVIWc1lR5wxLfx70y/eIUUTzHx6XihnjUqANiz1BowOV3n7+P2qrEQR03k1tM3erjaeT0yDw7yDMfzbCPE5ThBOXO1QIx4HA1B+gNgPfmB2eaWpoJalaNCsaLYZY81aHgZzmIMJu4TeFUO3Ct7MKmkJP0Iy+S/wA/PY8SzBglOimdWG3vAFrKVyRvj274pgJrXiIxkaPKstIKgAma7aCFLW8aTtrV5wKtXQ+Yy84bkj6WqF0z/peNLm2DDLpGieM1YMCK6KxLrnyrbTK3HvTXtZggbOaQoI374pZ+d2vlVon0tKtCWsmTN7IOyKvPHDiNs7nYHyfSYBI0GDuizvMcSie4A2JCnjuq4zTiDljATNrLkQplGBVX+Nw7YMpJ3POT+kYOoaulvFjyGXy1k9guazz6oR95RoMxmaTp9oFG2ZPmtsmhvXZd0qaJuq+v5ENADOGnS32WEHXrUl3/nxrxFmrVsAMjQAzJylYkY+qFUL75h+wrHGSRepOzJ/4gpAOnNI8MwiaLVchRf+fmDqqFOf1CNmDTRwbixC1QU8VhjAvGCKdU7tg/SgEdGgdPbgJrcQa2Gx9LM4Qkmoo4E2Ct3M0JjxvK7mmy6/TQNf4hlgH9+LIyGFD60vmio1wPs5i2DhlnM1ZLH5KDNCDKRXfh3VmxwqtAyWlcuS6RU7/5tjJyHR2v9lKWiLnC2ERRD2Su+D/zVmSIj1wpF2y6bBx4Ua4rc3bEleyaSG6Pq6N7WYLVdqE6GvFwXFFOTzdwhqlz95VIkGLgbG/8XuYSAIFHPbOsOyP7LVJw1arA7C/3V9A8p1s80MR5zq7t2nEgzsyM5NR14ZT36jERIwO2bSI+0CyI1SzMBitdwfj7dEI0gDd7a6XWZGan2GH8uo5l9gpUAjrJu7wZrHTEmHRist3zULlUH+nETLEjxKHqDoE4Kw1PosXKbFxvntdQvxEJ0XMM+gh7hf1azpweAxtGUmIuaO4OnnzfQLQShnRxRoZlh6k3gpqVBQy+plgNUHzKVl1+iUHI2nhINhx4HPwNA+RYzbeq+zyJoFioJEMPywZ14wCHtVZF7VXs3Qbop+1A6mF2eqvQ91NMnkS2/SlJxZXdQ6QDSXZqMpObPaxS2Cdp+/wkkGhmsz0vNztsScALzNfnRKwYSDVPOqtLfVrAGdtUSjKZGdM7/SDAD6GrzyVM1X0KyZS4J4uFkAw2N6/V3eRDag6PeK17ynDQ/gC+bMPv8taECu69gSp0H3Wf00XnkmGJqFX/ANcwxweQ/qaMDcUaez4FSy/yz8gm+YQ9/T5NSSEijQpDOqNJ71FpyzshrtgwYPyakc22K15owTKnh/EBYkqtQKbzSC9alPG9AWRke32SSNxbsAEPb62y8o0XTWzErJV/sCxpyZGp9nz4XzMfkFBsCw7tKkDQ0A8UyGDbPaK83K35KrMswx6JzbVad3hGFYQQPnKQmyExaIFfPap+BXPmoOs3UrTd0htXhj9edlpO0buTE1rGN/kXBubF+KJ8D555hYuFc/JyePOwO0xBJWyzWgqSzGd9I1BgBg895X7Z3v1je5jcRGH5sd43DoKXdlaAgNKQjqO2etSHRs4t9+620u7An9gql6gikDEwxUPfbzbaRZhBRgSE3M3ms19hLmcCz9W0I9/B0LC2jFCuMFnINnbuzebUTF3g8JpdKqTTNpLHYXi3oQ9RpuakecA5UtyeIzhjk46l0aFyS0KFWO0UV5bbpbFUtPNE7MlVlFhF0W00TD/cN9AAr5oi0zgaEVi375puF1I938UPnXjAG4FqXj1Q7hcFvKJbAAI9kvjAAOUqaDm1hKLaCtgPaMqyCp/oT3zY3pG3ORId8vAnNg8DVvNrHMd0C5rmSwoWugPojiaozfNKsyzwGUMsbhvMpalHNxHEjroTXR2KxdCwa1neayMAvuKjdvJa85l7ZJhZUdBG9NPgLNlrdh3Os/e/EazTFgVp7WGHo2CliORmfb+sotIxybhjluAsDJ0EHDSIYG6RTwsJ4S0AwC8Xr0cXL2bhHug0a2x3Q0NKs3Ba/mD1nICKCRbvuprbBGE02nxyt0LklyQbwidnS9SGuZkB4aswsNT0AgybbwWrRDXzrkrfVodTBySWvdNw7v1wayn7N5SMAa7bS7x9awQAOODM2jTdoT3ngqzTge9VvOumlz64VGqtPaFFHATxKpE8uHmkyRw9tGPW4LUaBRx4pPzGABWP563qc1yYAWH7aFOjXQyHTul4QuLcVoDN5AWysUHkj7oI8aaKIBylGTh5BLmcLK3vBNM3b+5odq01H7o0kUD+Y2PlZ9dl69YeCJ4t1JH2ugodNUI3z2gYbtJbTY9Uw7K+l0b15foI1GNVrmxrDAQHkabXhD8GSDwHa3+kR5fTRAvrmF4v222RhXvmumG2d66cGc6tVhhnTn8qisAdvyjELPItKu1uykc2L1UdIcjCX97Hs+fqo9N8azYG0THfqS3WvnMJIfIUL7bsfYeKHPD+vHSbrJiUCfM+ezVPl0pT1X96ijRVeo8B0V2WjCide9/AIDysNE24ewYzqERyhUGu2k1R8d9LrbzZIrXSFLhzvtYaFIodVsHUJeJrvTSEIkpIoAvsM3n0br9FaoIVtPPtzwdKeyW94aWIhqVoSQ2Ybd09d41rPUjdNCWZWKLQ4kVzRVyKLkocBy4rMXYaYTeuX1I4BMCuRLh+fdaA2ugUB1jcJGaKjSa2m9ME52TzgbRufrLcMqPBDFqqsmbKFOB+rdsnJjuk/ukU5B9v5yy8qbAutMweb9ooxAJIJ4ak5S4+71rKXWW9eLYro22UWBAJa3np7UixTGFRpmovWSM5PL8SGnDrKds3t5HkNolnc6gvx2OrdYHeKwG/jSOwMjYfbcRItuJXu7dZzNZuM429YFOsLoRaBbA85jBev/55rbVbXT3dT8zA7v2FiocUSPxJ4QfNS0gXlxr+ao2mXoJFxKBUPd9L4wsuEvrwKokWeIdomuOc9bYyeIOE9GByJgAdq1hTyKgwfd8zAL7V+C2w31SwX4TLeFWq006JAJiqxz9ppA3JaB/8uWOWSCFQNaK9eqxLvSl2iy0CIvE+sF+mT1uPkzpMJ5Dnq3/DI06z4XLvBEwP9w50RBp2+Z8QeN2ccn4TdWLDAQV4PsKyv4KNH06zHcC7N0/gPDzBFLjC2gNd+Hk99jyNn8VMvygn7lozafGTZNtmkUeaEYBAWwp6yIinmRptEW2kWVDoP+o5/2zMnEf33txKGaQQTw1ncPs9Bn61TgnX+LZ776ZBsFNSxJ3yj+VlDMqtW60SOjENM5R2Su3NqtrUBdr66kDcumKi5D8NKAGO94JJgs6SmhZ+0+XTgkTMzLUSVp3u31jhDkUXVodt/+MIg8XLvpGOMBjpWgmMNKr4Zt75/GupGPwOYM5pubNe6gvg95i838MiEmbe/cyxGv5Vk8ZF0ntRNsN23cDj7k9ryCdj8pI+Abx3VcL8mxiZVBe2AGV3cq9mwPz3quEMBg4OH9U8w0pFF5Jbx3SUOzqxYWmkF0mOQS4tPNqPMfgniouftNFtLQogfXTx60GdeWw6FPf6y0udcjbIgyCqPBz/0+LCSGFd8J0q/hAcg6jmGP499y3KgUgOaIo/k7yxWU9/DitiJ42BQ9gGFwjAaZc/bpWchAUwQQGaNc3r2aNJR2JQmrRmZ2yyU18hAbQZ70FPGtn+ahLGkLUTrKOSy9fxoSEv4ur20iQWt0v24c24mgpEQBFLYBCWJ1rqhG+yh/WdL8ZqEkvVFKpaytJeXdyJTIilkBRGuQsldsjvKcfnmtFjIeUUc8aHN65rAg6SwBgMDYXEpZ0ES/YJorhCCraZZzrlQRpSyuzSBO/P3OrtC20PfPOFgX5oSqy6bwYpKRUD5pGSsMC0mrPRsaNIhlraheTpQ5fcsqNhEyC0yovBA7y7KQWvidIEO4UP5ELsrF9qHKS1h60DtgZtFKt2ghCDQ7JkqZ8Y4vVcO5xacDA/gh3mxQHMsyJQOwlT2nsI+8T4yZb/5ik4DgeLu0xzUPtxzIrR1pTfyPaChTh/Q4/JCs0K/s8bOGQuqt+y3yNDjuRjGR2jztaBpMQdnNn8qnEK4tgMgM48jXNiB3p8IaleBpRVNFYpL4IuuvHUa/mbTFc1H2PB36sdt2T4mk5EILTfFGcLx6Uya2rmUmEyATPq6H8xBu2+dDlJtm1TTtRFMIASx4MnHwNIXFoWik3q49F99KtrPzY2steg0taMp6DDNIDrvJne/N3cyjaTjtnJ4ZKEtIgBJNoatxaWhPt0u+9A+H7/C1WdSaCwAAAABJRU5ErkJggg=="
                                                    }                                                                                                alt={"member.firstName"}
                                                />
                                            </Link>

                                            <Link className="p-1 bg-light" to={`https://wa.me//201127471188`} type="submit">
                                                <img style={{ width: "32px" }}
                                                    src={
                                                        "data:image/png;base64,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"
                                                    }                                                                                                alt={"member.firstName"}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                                <div className="pic"><img src={YahyaSaad} alt="teamImg" /></div>
                                <div className="desc text-center">
                                    <div className="mb-3 box-team p-2 d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <h4 className="text-bold">محمود نصرالدين حافظ</h4>
                                            <p>Front End Developer</p>
                                        </div>

                                        <div className="social">
                                            <Link className="p-1 bg-light" to={`https://wa.me//201127471188`} type="submit">
                                                <img style={{ width: "32px" }}
                                                    src={github}                                                                                                alt={"member.firstName"}
                                                />
                                            </Link>

                                            <Link className="p-1 bg-light" to={`https://wa.me//201127471188`} type="submit">
                                                <img style={{ width: "32px" }}
                                                    src={
                                                        "data:image/png;base64,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"
                                                    }                                                                                                alt={"member.firstName"}
                                                />
                                            </Link>

                                            <Link className="p-1 bg-light" to={`https://wa.me//201127471188`} type="submit">
                                                <img style={{ width: "32px" }}
                                                    src={
                                                        "data:image/png;base64,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"
                                                    }                                                                                                alt={"member.firstName"}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                                <div className="pic"><img src={YahyaSaad} alt="teamImg" /></div>
                                <div className="desc text-center">
                                    <div className="mb-3 box-team p-2 d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <h4 className="text-bold">أشرف أبوالري عطية</h4>
                                            <p>Front End Developer</p>
                                        </div>
                                        <div className="d-flex social">
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                                <div className="pic"><img src={YahyaSaad} alt="teamImg" /></div>
                                <div className="desc text-center">
                                    <div className="mb-3 box-team p-2 d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <h4 className="text-bold">احمد ياسين خضري</h4>
                                            <p>Front End Developer</p>
                                        </div>
                                        <div className="d-flex social">
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                                <div className="pic"><img src={YahyaSaad} alt="teamImg" /></div>
                                <div className="desc text-center">
                                    <div className="mb-3 box-team p-2 d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <h4 className="text-bold">عبدالرحمن احمد علي</h4>
                                            <p>Front End Developer</p>
                                        </div>
                                        <div className="d-flex social">
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                                <div className="pic"><img src={YahyaSaad} alt="teamImg" /></div>
                                <div className="desc text-center">
                                    <div className="mb-3 box-team p-2 d-flex flex-column align-items-center justify-content-center">
                                        <div>
                                            <h4 className="text-bold">هشام مسعد احمد</h4>
                                            <p>Front End Developer</p>
                                        </div>
                                        <div className="d-flex social">
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                            <FontAwesomeIcon icon={faPrint} fontSize={'26px'} color="blue" className="printer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team