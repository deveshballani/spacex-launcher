import { MissionComponent } from './mission.component';

describe('MissionComponent', () => {
    let component: MissionComponent;

    beforeEach(() => {
        component = new MissionComponent();
    });

    it('Sould initialize the component', () => {
        expect(component).toBeTruthy();
    });

    it('Should return Success Landing as False - when any of the rocket core failed landing', () => {
        const mockRocket  = {
            first_stage: {
                cores: [
                    { land_success: true },
                    { land_success: false },
                    { land_success: true }
                ]
            }
        };

        const isLandingSuccess = component.isLandSuccess(mockRocket);

        expect(isLandingSuccess).toBeFalsy();
    });

    it('Should return Success Landing as True - only when all the cores succeeded while landing', () => {
        const mockRocket  = {
            first_stage: {
                cores: [
                    { land_success: true },
                    { land_success: true },
                    { land_success: true }
                ]
            }
        };

        const isLandingSuccess = component.isLandSuccess(mockRocket);

        expect(isLandingSuccess).toBeTruthy();
    });

    it('Should return Success Landing as N/A - when there is no data about success and failure of rocket core landing', () => {
        const mockRocket  = {
            first_stage: {
                cores: [
                    { land_success: null },
                    { land_success: null }
                ]
            }
        };

        const isLandingSuccess = component.isLandSuccess(mockRocket);

        expect(isLandingSuccess).toBe(undefined);
    });
});
