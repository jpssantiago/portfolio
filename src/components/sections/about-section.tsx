"use client"

import { useState } from "react"

import { Section } from "@/components/section/section"
import { SectionHeader } from "@/components/section/section-header"
import { SectionTitle } from "@/components/section/section-title"
import { SectionContent } from "@/components/section/section-content"
import { TabView } from "@/components/tab-view/tab-view"
import { TabViewItems } from "@/components/tab-view/tab-view-items"
import { TabViewItem } from "@/components/tab-view/tab-view-item"
import { TabViewContent } from "@/components/tab-view/tab-view-content"
import { AboutTabView } from "@/components/views/about-tab-view"
import { SkillsTabView } from "@/components/views/skills-tab-view"
import { WorkTabView } from "@/components/views/work-tab-view"

const tabs: string[] = ["About me", "My skills", "Work and education"]

export function AboutSection() {
    const [currentTab, setCurrentTab] = useState<string>(tabs[0])
    
    return (
        <Section>
            <SectionHeader>
                <SectionTitle index={1}>
                    About me & Experience
                </SectionTitle>
            </SectionHeader>

            <SectionContent>
                <TabView>
                    <TabViewItems selectedIndex={tabs.findIndex(i => currentTab == i)}>
                        {tabs.map((tab, index) => (
                            <TabViewItem 
                                key={index}
                                isSelected={currentTab == tab}
                                onSelect={() => setCurrentTab(tab)}
                            >
                                {tab}
                            </TabViewItem>
                        ))}
                    </TabViewItems>

                    <TabViewContent>
                        {currentTab == "About me" && <AboutTabView />}

                        {currentTab == "My skills" && <SkillsTabView />}

                        {currentTab == "Work and education" && <WorkTabView />}
                    </TabViewContent>
                </TabView>
            </SectionContent>
        </Section>
    )
}