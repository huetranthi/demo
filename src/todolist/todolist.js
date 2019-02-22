
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
                this.toggle('edit');
                var nameEdit = ctx.get( '.name' );
                var birthEdit = ctx.get( '.birth' );
                this.set('name', nameEdit);
                this.set('birth', birthEdit);
            },
            submit: function() {
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
                    
                }
            },
            close: function() {
                this.set('add', false);
                this.set('edit', false);
                this.set('newName', '');
                this.set('newBirth', '');
                this.set('name', '');
                this.set('birth', '');
            }
        });
    },
    data: {
        students: students,
        add: false,
        edit: false,
        newName: '',
        newBirth: '',
        name: '',
        birth: ''
    }
});
var ractive = new Ractive({
    target: '#target',
    template: '#template',
    components: { students: Students },
    data: {
        newName: 'aa',
        newBirth: ''
    }
});