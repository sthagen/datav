import { Box, Button, Flex, GridProps, HStack, Text, Tooltip, useColorModeValue, VStack } from "@chakra-ui/react"
import { PanelAdd } from "components/icons/PanelAdd"
import PageContainer from "layouts/page-container"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { FaChartBar, FaCog, FaRegSave } from "react-icons/fa"
import { Dashboard, Panel } from "types/dashboard"
import { requestApi } from "utils/axios/request"
import CustomColors from "src/theme/colors"
import IconButton from "components/button/IconButton"
import { Team } from "types/teams"
import ReserveUrls from "src/data/reserve-urls"
import DashboardHeader from "components/dashboard/DashboardHeader"
import DashboardGrid from "components/dashboard/grid/DashboardGrid"
import { cloneDeep } from "lodash"
import EditPanel from "components/dashboard/edit-panel/EditPanel"
// All of the paths that is not defined in pages directory will redirect to this page,
// generally these pages are defined in:
// 1. team's side menu, asscessed by a specific url path
// 2. dashboard page, accessed by a dashboard id
const DashboardPage = () => {
    const router = useRouter()
    const dashboardId = router.query.dashboardId

    const [dashboard, setDashboard] = useState<Dashboard>(null)
    const [team, setTeam] = useState<Team>(null)
    // panel used for temporary purpose,such as adding a new panel, edit a panel etc
    const [panel, setPanel] = useState<Panel>(null)
    
    useEffect(() => {
        if (dashboardId) {
            load()
        }
    }, [dashboardId])


    const load = async () => {
        const res = await requestApi.get(`/dashboard/byId/${dashboardId}`)
        setDashboard(res.data)

        const res1 = await requestApi.get(`/team/${res.data.ownedBy}`)
        setTeam(res1.data)
    }

    const getNextPanelId = () => {
        let max = 0;
    
        for (const panel of dashboard.data.panels) {
          if (panel.id > max) {
            max = panel.id;
          }
        }
    
        return max + 1;
      }

    const onAddPanel = () => {
        // Return if the "Add panel" exists already
        if (panel) {
            return;
        }
        if (!dashboard.data.panels) {
            dashboard.data.panels = []
        }
        const newPanel:Panel = {
            id: getNextPanelId(),
            type: "graph",
            gridPos: { x: 0, y: 0, w: 12, h: 8 },
            title: 'Panel Title',
        }
 

        dashboard.data.panels.unshift(panel);

        // panel in editing must be a clone of the original panel
        setPanel(cloneDeep(newPanel))

        // scroll to top after adding panel
        window.scrollTo(0, 0);
    };

    const onEditPanelChange = () => {
        for (let i = 0; i < dashboard.data.panels.length; i++) {
            if (dashboard.data.panels[i].id === panel.id) {
                dashboard.data.panels[i] = panel
            }
        }
        // make the changes taking effect
        setDashboard(cloneDeep(dashboard))
    }

    const onEditPanelDiscard = () => {
        setPanel(null)
    }

    return (
        <>
        <PageContainer>
            {dashboard && <Box px="3" width="100%">
                <DashboardHeader dashboard={dashboard} team={team} onAddPanel={onAddPanel}/>
                <Box mt="50px" py="2">
                    <DashboardGrid  dashboard={dashboard} />
                </Box>        
            </Box>}
        </PageContainer>
        <EditPanel panel={panel} onChange={onEditPanelChange} onDiscard={onEditPanelDiscard}/>
        </>
    )
}

export default DashboardPage



