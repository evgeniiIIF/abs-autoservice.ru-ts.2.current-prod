import type { BonusCard, GetBonusPageInfoData } from '~/api/http';

export interface BonusState {
  bonusCard: BonusCard | null;
  bonusPageInfo: GetBonusPageInfoData | null;
}
