describe('Testing service', function() {
    var myService;

        beforeEach(function() {
            module('da-service');

            inject(function(_myService_) {
                myService = _myService_;
            });
        });

        it('should test', function() {
            var result = myService.action();
            console.log(result);
            console.log('HE:::');
            expect(result).toBe('Named');
        });


});