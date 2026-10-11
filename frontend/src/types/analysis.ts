export type PriorityLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export interface SkillItem {
    skill: string;
    reason: string;
}

export interface LearningPriorityItem {
    skill: string;
    priority: PriorityLevel;
    reason: string;
}

export interface AnalysisResult {
    matchScore: number;
    matchingSkills: SkillItem[];
    partialSkills: SkillItem[];
    missingSkills: SkillItem[];
    learningPriority: LearningPriorityItem[];
}