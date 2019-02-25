
var students = [
    {
        name: 'D1',
        birth: '23/01/1998'
    },
    {
        name: 'D2',
        birth: '23/01/1998'
    },
    {
        name: 'D3',
        birth: '23/01/1998'
    },
    {
        name: 'D4',
        birth: '23/01/1998'
    },
];
var Students = Ractive.extend({
    template: '#student',
    // isolated: true,
    oninit: function () {
        this.on({
            removeItem: function (ctx, index) {
                console.log(index);
                this.splice('students', index, 1);
            },
            editItem: function(ctx) {
                this.set('nameEdit',ctx.get( '.name' ));
                this.set('birthEdit',ctx.get( '.birth' ));
                this.toggle('edit');
            },
            submit: function(ctx) {
                if(this.get('add')){
                    var newStudent = {
                        name: this.get('newName'),
                        birth: this.get('newBirth')
                    };
                    this.push('students',newStudent);
                    this.set('newName', '');
                    this.set('newBirth', '');
                    this.toggle('add');
                    return false;
                }
                else {
                    var nameEdit = ctx.get( '.name' );
                    var birthEdit = ctx.get( '.birth' );
                    this.toggle('edit');
                }
            },
            close: function(ctx) {
                this.set('add', false);
                this.set('edit', false);
                this.set('newName', '');
                this.set('newBirth', '');
                var nameE = this.get('nameEdit');
                this.set(ctx.get( '.name' ), 'nameEdit');
                this.set(ctx.get( '.name' ), 'birthEdit');
            }
        });
    },
    data: {
        students: students,
        add: false,
        edit: false,
        newName: '',
        newBirth: '',
        nameEdit: '1',
        birthEdit: ''
    }
});
var ractive = new Ractive({
    target: '#target',
    template: '#template',
    components: { Students: Students },
    data: {
        newName: 'aa',
        newBirth: ''
    }
});