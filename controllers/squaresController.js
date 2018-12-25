var async = require('async');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

//[parent 1 or 2][allele #][expression 1 or 2]

exports.monohybrid = function(req, res, next) {
    async.parallel([

    ], function(err, results) {
        if(err) return next(err)

        let _a1 = ['A.', 'a.'];
        let _a2 = ['A.', 'a.'];
        let cross = [['A.A.', 'A.a.'], ['A.a.', 'a.a.']];
        let superscripts = [[['.', '.']], [['.', '.']]];
        let def = [['Aa'], ['Aa']];
        res.render('squares/monohybrid', { title: 'Monohybrid', _a1, _a2, cross, def, superscripts});
    });
};

exports.dihybrid = function(req, res, next) {
    async.parallel(() => {

    }, (err, results) => {
        if(err) return next(err)

        let def = [['Aa', 'Bb'], ['Aa', 'Bb']];
        let superscripts = [[['.', '.'], ['.', '.']],[['.', '.'], ['.', '.']]];
        let _a1 = [[['A', '.'],['B', '.']], [['A', '.'],['b', '.']], [['a', '.'],['B', '.']], [['a', '.'],['b', '.']]];
        let _a2 = [[['A', '.'],['B', '.']], [['A', '.'],['b', '.']], [['a', '.'],['B', '.']], [['a', '.'],['b', '.']]];
        let cross = [[['A', '.', 'A', '.', 'B', '.', 'B', '.'], ['A', '.', 'A', '.', 'B', '.', 'b', '.'], ['A', '.', 'a', '.', 'B', '.', 'B', '.'], ['A', '.', 'a', '.', 'B', '.', 'b', '.']], 
            [['A', '.', 'A', '.', 'B', '.', 'b', '.'], ['A', '.', 'A', '.', 'b', '.', 'b', '.'], ['A', '.', 'a', '.', 'B', '.', 'b', '.'], ['A', '.', 'a', '.', 'b', '.', 'b', '.']], 
            [['A', '.', 'a', '.', 'B', '.', 'B', '.'], ['A', '.', 'a', '.', 'B', '.', 'b', '.'], ['a', '.', 'a', '.', 'B', '.', 'B', '.'], ['a', '.', 'a', '.', 'B', '.', 'b', '.']], 
        [['A', '.', 'a', '.', 'B', '.', 'b', '.'], ['A', '.', 'a', '.', 'b', '.', 'b', '.'], ['a', '.', 'a', '.', 'B', '.', 'b', '.'], ['a', '.', 'a', '.', 'b', '.', 'b', '.']]];

        res.render('squares/dihybrid', { title: 'Dihybrid', def, superscripts, _a1, _a2, cross});
    });
};

exports.trihybrid = function(req, res, next) {
    async.parallel(() => {

    }, (err, results) => {
        if(err) return next(err)

        let def = [['Aa', 'Bb', 'Cc'], ['Aa', 'Bb', 'Cc']];
        let superscripts = [[['.', '.'], ['.', '.'], ['.', '.']], [['.', '.'], ['.', '.'], ['.', '.']]];
        let _a1 = [[['A', '.'], ['B', '.'], ['C', '.']], [['A', '.'], ['B', '.'], ['c', '.']], [['A', '.'], ['b', '.'], ['C', '.']], [['A', '.'], ['b', '.'], ['c', '.']], [['a', '.'], ['B', '.'], ['C', '.']], [['a', '.'], ['B', '.'], ['c', '.']], [['a', '.'], ['b', '.'], ['C', '.']], [['a', '.'], ['b', '.'], ['c', '.']]];
        let _a2 = [[['A', '.'], ['B', '.'], ['C', '.']], [['A', '.'], ['B', '.'], ['c', '.']], [['A', '.'], ['b', '.'], ['C', '.']], [['A', '.'], ['b', '.'], ['c', '.']], [['a', '.'], ['B', '.'], ['C', '.']], [['a', '.'], ['B', '.'], ['c', '.']], [['a', '.'], ['b', '.'], ['C', '.']], [['a', '.'], ['b', '.'], ['c', '.']]];
        let cross = [ [ [ 'A', '.', 'A', '.', 'B', '.', 'B', '.', 'C', '.', 'C', '.' ],
        [ 'A', 'x', 'A', '.', 'B', '.', 'B', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'A', '.', 'B', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'A', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'B', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'B', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ] ],
      [ [ 'A', '.', 'A', '.', 'B', '.', 'B', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'A', '.', 'B', '.', 'B', '.', 'c', '.', 'c', '.' ],
        [ 'A', '.', 'A', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'A', '.', 'B', '.', 'b', '.', 'c', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'B', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'B', '.', 'c', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'c', '.', 'c', '.' ] ],
      [ [ 'A', '.', 'A', '.', 'B', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'A', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'A', '.', 'b', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'A', '.', 'b', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'b', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'a', '.', 'b', '.', 'b', '.', 'C', '.', 'c', '.' ] ],
      [ [ 'A', '.', 'A', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'A', '.', 'B', '.', 'b', '.', 'c', '.', 'c', '.' ],
        [ 'A', '.', 'A', '.', 'b', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'A', '.', 'b', '.', 'b', '.', 'c', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'c', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'b', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'b', '.', 'b', '.', 'c', '.', 'c', '.' ] ],
      [ [ 'A', '.', 'a', '.', 'B', '.', 'B', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'B', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'B', '.', 'C', '.', 'C', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'B', '.', 'C', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ] ],
      [ [ 'A', '.', 'a', '.', 'B', '.', 'B', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'B', '.', 'c', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'c', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'B', '.', 'C', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'B', '.', 'c', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'b', '.', 'c', '.', 'c', '.' ] ],
      [ [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'b', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'A', '.', 'a', '.', 'b', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'b', '.', 'b', '.', 'C', '.', 'C', '.' ],
        [ 'a', '.', 'a', '.', 'b', '.', 'b', '.', 'C', '.', 'c', '.' ] ],
      [ [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'B', '.', 'b', '.', 'c', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'b', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'A', '.', 'a', '.', 'b', '.', 'b', '.', 'c', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'B', '.', 'b', '.', 'c', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'b', '.', 'b', '.', 'C', '.', 'c', '.' ],
        [ 'a', '.', 'a', '.', 'b', '.', 'b', '.', 'c', '.', 'c', '.' ] ] ];
        res.render('squares/trihybrid', { title: 'Trihybrid', def, superscripts, _a1, _a2, cross});
    });
};

exports.blood_typing = function(req, res, next){
    async.parallel([

    ], function(err, results) {
        if(err) return next(err)

        let _a1 = ['IA', 'i.'];
        let _a2 = ['IB', 'i.'];
        let cross = [['IAIB', 'IAi.'], ['IBi.', 'i.i.']];
        let selected_alleles = [[[true, false], [false, true]], [[true, false], [false, true]]];
        let selected_superscripts = [[[true, false, false], [false, false, true]], [[false, true, false], [false, false, true]]];
        res.render('squares/blood_typing', { title: 'Blood Typing', _a1, _a2, cross, selected_alleles, selected_superscripts});
    });
};

exports.post_blood_typing = [
    (req, res, next) => {
        next();
    },

    body('p1_a1_1', 'Parent 1 Allele 1 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a1_2', 'Parent 1 Allele 1 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a1_1', 'Parent 2 Allele 1 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a1_2', 'Parent 2 Allele 1 Expression 2 must not be empty.').isLength({min: 1}).trim(),

    body('p1_a1_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a1_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a1_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a1_2s', 'Superscript Invalid').isLength({min: 1}).trim(),

    sanitizeBody('*').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            async.parallel({

            }, function(err, results) {
                if (err) return next(err);
                let p1_a1_1 = blood_clean(req.body.p1_a1_1);
                let p1_a1_2 = blood_clean(req.body.p1_a1_2);
                let p2_a1_1 = blood_clean(req.body.p2_a1_1);
                let p2_a1_2 = blood_clean(req.body.p2_a1_2);

                let p1_a1_1s = blood_clean(req.body.p1_a1_1s);
                let p1_a1_2s = blood_clean(req.body.p1_a1_2s);
                let p2_a1_1s = blood_clean(req.body.p2_a1_1s);
                let p2_a1_2s = blood_clean(req.body.p2_a1_2s);

                let selected_alleles = [[[true, false], [false, true]], [[true, false], [false, true]]];
                let selected_superscripts = [[[true, false, false], [false, false, true]], [[false, true, false], [false, false, true]]];

                let _a1 = [[p1_a1_1, p1_a1_1s], [p1_a1_2, p1_a1_2s]];
                let _a2 = [[p2_a1_1, p2_a1_1s], [p2_a1_2, p2_a1_2s]];

                let cross = [[_a1[0].concat(_a2[0]), _a1[1].concat(_a2[0])], [_a1[0].concat(_a2[1]), _a1[1].concat(_a2[1])]];
                console.log(cross);
                res.render('squares/blood_typing', { title: 'Blood Typing', _a1, _a2, cross, selected_alleles, selected_superscripts});
            });
        }
        else {
            let p1_a1_1 = blood_clean(req.body.p1_a1_1);
            let p1_a1_2 = blood_clean(req.body.p1_a1_2);
            let p2_a1_1 = blood_clean(req.body.p2_a1_1);
            let p2_a1_2 = blood_clean(req.body.p2_a1_2);

            let p1_a1_1s = blood_clean(req.body.p1_a1_1s);
            let p1_a1_2s = blood_clean(req.body.p1_a1_2s);
            let p2_a1_1s = blood_clean(req.body.p2_a1_1s);
            let p2_a1_2s = blood_clean(req.body.p2_a1_2s);

            console.log(p1_a1_1, p1_a1_2, p2_a1_1, p2_a1_2);
            console.log(p1_a1_1s, p1_a1_2s, p2_a1_1s, p2_a1_2s);

            let selected_alleles = [[[true, false], [false, true]], [[true, false], [false, true]]];
            let selected_superscripts = [[[true, false, false], [false, false, true]], [[false, true, false], [false, false, true]]];

            let _a1 = [[p1_a1_1, p1_a1_1s], [p1_a1_2, p1_a1_2s]];
            let _a2 = [[p2_a1_1, p2_a1_1s], [p2_a1_2, p2_a1_2s]];

            let cross = blood_cross(_a1, _a2);
            console.log(cross);
            res.render('squares/blood_typing', { title: 'Blood Typing', _a1, _a2, cross, selected_alleles, selected_superscripts});
        }
    }
];

exports.post_monohybrid = [
    (req, res, next) => {
        next();
    },

    body('p1_a1_1', 'Parent 1 Allele 1 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a1_2', 'Parent 1 Allele 1 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a1_1', 'Parent 2 Allele 1 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a1_2', 'Parent 2 Allele 1 Expression 2 must not be empty.').isLength({min: 1}).trim(),

    body('p1_a1_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a1_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a1_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a1_2s', 'Superscript Invalid').isLength({min: 1}).trim(),

    sanitizeBody('*').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            async.parallel({

            }, function(err, results) {
                if (err) return next(err);
                let cleaned_superscripts = mono_clean_superscripts(req.body.p1_a1_1s, req.body.p1_a1_2s, req.body.p2_a1_1s, req.body.p2_a1_2s);
                let superscripts = [[[cleaned_superscripts[0], cleaned_superscripts[1]]], [[cleaned_superscripts[2], cleaned_superscripts[3]]]];
                
                let cleaned_alleles = mono_clean_alleles(req.body.p1_a1_1, req.body.p1_a1_2, req.body.p2_a1_1, req.body.p2_a1_2);
                let alleles = [[cleaned_alleles[0], cleaned_alleles[1]], [cleaned_alleles[2], cleaned_alleles[3]]];

                let _a1 = [alleles[0][0] + superscripts[0][0], alleles[0][1] + superscripts[0][1]];
                let _a2 = [alleles[1][0] + superscripts[1][0], alleles[1][1] + superscripts[1][1]];
                let cross = mono_cleaned_cross(alleles, superscripts);
                let def = [[alleles[0][0] + alleles[0][1]], [alleles[1][0] + alleles[1][1]]];
                res.render('squares/monohybrid', { title: 'Monohybrid', _a1, _a2, cross, def, superscripts});
            });
        }
        else {
            let cleaned_superscripts = mono_clean_superscripts(req.body.p1_a1_1s, req.body.p1_a1_2s, req.body.p2_a1_1s, req.body.p2_a1_2s);
            let superscripts = [[[cleaned_superscripts[0], cleaned_superscripts[1]]], [[cleaned_superscripts[2], cleaned_superscripts[3]]]];
                
            let cleaned_alleles = mono_clean_alleles(req.body.p1_a1_1, req.body.p1_a1_2, req.body.p2_a1_1, req.body.p2_a1_2);
            let alleles = [[cleaned_alleles[0], cleaned_alleles[1]], [cleaned_alleles[2], cleaned_alleles[3]]];

            let _a1 = [alleles[0][0] + superscripts[0][0][0], alleles[0][1] + superscripts[0][0][1]];
            let _a2 = [alleles[1][0] + superscripts[1][0][0], alleles[1][1] + superscripts[1][0][1]];

            let cross = mono_cleaned_cross(alleles, superscripts);
            let def = [[alleles[0][0] + alleles[0][1]], [alleles[1][0] + alleles[1][1]]];

            res.render('squares/monohybrid', { title: 'Monohybrid', _a1, _a2, cross, def, superscripts});
        }
    }
];

exports.post_dihybrid = [
    (req, res, next) => {
        next();
    },

    body('p1_a1_1', 'Parent 1 Allele 1 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a1_2', 'Parent 1 Allele 1 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a1_1', 'Parent 2 Allele 1 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a1_2', 'Parent 2 Allele 1 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a2_1', 'Parent 1 Allele 2 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a2_2', 'Parent 1 Allele 2 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a2_1', 'Parent 2 Allele 2 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a2_2', 'Parent 2 Allele 2 Expression 2 must not be empty.').isLength({min: 1}).trim(),

    body('p1_a1_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a1_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a1_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a1_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a2_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a2_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a2_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a2_2s', 'Superscript Invalid').isLength({min: 1}).trim(),

    sanitizeBody('*').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            async.parallel({

            }, function(err, results) {
                if (err) return next(err);
                let p1_a1_1 = req.body.p1_a1_1;
                let p1_a1_2 = req.body.p1_a1_2;
                let p1_a2_1 = req.body.p1_a2_1;
                let p1_a2_2 = req.body.p1_a2_2;
                let p2_a1_1 = req.body.p2_a1_1;
                let p2_a1_2 = req.body.p2_a1_2;
                let p2_a2_1 = req.body.p2_a2_1;
                let p2_a2_2 = req.body.p2_a2_2;

                let p1_a1_1s = req.body.p1_a1_1s;
                let p1_a1_2s = req.body.p1_a1_2s;
                let p1_a2_1s = req.body.p1_a2_1s;
                let p1_a2_2s = req.body.p1_a2_2s;
                let p2_a1_1s = req.body.p2_a1_1s;
                let p2_a1_2s = req.body.p2_a1_2s;
                let p2_a2_1s = req.body.p2_a2_1s;
                let p2_a2_2s = req.body.p2_a2_2s;

                let cleaned_alleles = di_clean_alleles(p1_a1_1, p1_a1_2, p1_a2_1, p1_a2_2, p2_a1_1, p2_a1_2, p2_a2_1, p2_a2_2);
                let cleaned_superscripts = di_clean_superscripts(p1_a1_1s, p1_a1_2s, p1_a2_1s, p1_a2_2s, p2_a1_1s, p2_a1_2s, p2_a2_1s, p2_a2_2s);

                let foil_alleles_1 = di_foil(cleaned_alleles[0]);
                let foil_alleles_2 = di_foil(cleaned_alleles[1]);
                let fa1 = foil_alleles_1, fa2 = foil_alleles_2;

                let foil_superscripts_1 = di_foil(cleaned_superscripts[0]);
                let foil_superscripts_2 = di_foil(cleaned_superscripts[1]);
                let fs1 = foil_superscripts_1, fs2 = foil_superscripts_2;

                let _a1 = split_str_to_arr([[fa1[0][0] + fs1[0][0], fa1[0][1] + fs1[0][1]], [fa1[1][0] + fs1[1][0], fa1[1][1] + fs1[1][1]], [fa1[2][0] + fs1[2][0], fa1[2][1] + fs1[2][1]], [fa1[3][0] + fs1[3][0], fa1[3][1] + fs1[3][1]]]);
                let _a2 = split_str_to_arr([[fa2[0][0] + fs2[0][0], fa2[0][1] + fs2[0][1]], [fa2[1][0] + fs2[1][0], fa2[1][1] + fs2[1][1]], [fa2[2][0] + fs2[2][0], fa2[2][1] + fs2[2][1]], [fa2[3][0] + fs2[3][0], fa2[3][1] + fs2[3][1]]]);
                let superscripts = cleaned_superscripts;
                let def = cleaned_alleles;
                let cross = di_cross(_a1, _a2);

                res.render('squares/dihybrid', { title: 'Dihybrid', _a1, _a2, def, cross, superscripts});
            });
        }
        else {
            let p1_a1_1 = req.body.p1_a1_1;
            let p1_a1_2 = req.body.p1_a1_2;
            let p1_a2_1 = req.body.p1_a2_1;
            let p1_a2_2 = req.body.p1_a2_2;
            let p2_a1_1 = req.body.p2_a1_1;
            let p2_a1_2 = req.body.p2_a1_2;
            let p2_a2_1 = req.body.p2_a2_1;
            let p2_a2_2 = req.body.p2_a2_2;

            let p1_a1_1s = req.body.p1_a1_1s;
            let p1_a1_2s = req.body.p1_a1_2s;
            let p1_a2_1s = req.body.p1_a2_1s;
            let p1_a2_2s = req.body.p1_a2_2s;
            let p2_a1_1s = req.body.p2_a1_1s;
            let p2_a1_2s = req.body.p2_a1_2s;
            let p2_a2_1s = req.body.p2_a2_1s;
            let p2_a2_2s = req.body.p2_a2_2s;

            let cleaned_alleles = di_clean_alleles(p1_a1_1, p1_a1_2, p1_a2_1, p1_a2_2, p2_a1_1, p2_a1_2, p2_a2_1, p2_a2_2);
            let cleaned_superscripts = di_clean_superscripts(p1_a1_1s, p1_a1_2s, p1_a2_1s, p1_a2_2s, p2_a1_1s, p2_a1_2s, p2_a2_1s, p2_a2_2s);

            let foil_alleles_1 = di_foil(cleaned_alleles[0]);
            let foil_alleles_2 = di_foil(cleaned_alleles[1]);
            let fa1 = foil_alleles_1, fa2 = foil_alleles_2;

            let foil_superscripts_1 = di_foil(cleaned_superscripts[0]);
            let foil_superscripts_2 = di_foil(cleaned_superscripts[1]);
            let fs1 = foil_superscripts_1, fs2 = foil_superscripts_2;

            let _a1 = split_str_to_arr([[fa1[0][0] + fs1[0][0], fa1[0][1] + fs1[0][1]], [fa1[1][0] + fs1[1][0], fa1[1][1] + fs1[1][1]], [fa1[2][0] + fs1[2][0], fa1[2][1] + fs1[2][1]], [fa1[3][0] + fs1[3][0], fa1[3][1] + fs1[3][1]]]);
            let _a2 = split_str_to_arr([[fa2[0][0] + fs2[0][0], fa2[0][1] + fs2[0][1]], [fa2[1][0] + fs2[1][0], fa2[1][1] + fs2[1][1]], [fa2[2][0] + fs2[2][0], fa2[2][1] + fs2[2][1]], [fa2[3][0] + fs2[3][0], fa2[3][1] + fs2[3][1]]]);

            let superscripts = cleaned_superscripts;
            let def = cleaned_alleles;

            let cross = di_cross(_a1, _a2);

            res.render('squares/dihybrid', { title: 'Dihybrid', _a1, _a2, def, cross, superscripts});
        }
    }
];

exports.post_trihybrid = [
    (req, res, next) => {
        next();
    },

    body('p1_a1_1', 'Parent 1 Allele 1 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a1_2', 'Parent 1 Allele 1 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a1_1', 'Parent 2 Allele 1 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a1_2', 'Parent 2 Allele 1 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a2_1', 'Parent 1 Allele 2 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a2_2', 'Parent 1 Allele 2 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a2_1', 'Parent 2 Allele 2 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a2_2', 'Parent 2 Allele 2 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a3_1', 'Parent 1 Allele 2 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p1_a3_2', 'Parent 1 Allele 2 Expression 2 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a3_1', 'Parent 2 Allele 2 Expression 1 must not be empty.').isLength({min: 1}).trim(),
    body('p2_a3_2', 'Parent 2 Allele 2 Expression 2 must not be empty.').isLength({min: 1}).trim(),

    body('p1_a1_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a1_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a1_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a1_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a2_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a2_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a2_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a2_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a3_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p1_a3_2s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a3_1s', 'Superscript Invalid').isLength({min: 1}).trim(),
    body('p2_a3_2s', 'Superscript Invalid').isLength({min: 1}).trim(),

    sanitizeBody('*').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            async.parallel({

            }, function(err, results) {
                if (err) return next(err);
                let p1_a1_1 = req.body.p1_a1_1;
            let p1_a1_2 = req.body.p1_a1_2;
            let p1_a2_1 = req.body.p1_a2_1;
            let p1_a2_2 = req.body.p1_a2_2;
            let p1_a3_1 = req.body.p1_a3_1;
            let p1_a3_2 = req.body.p1_a3_2;
            let p2_a1_1 = req.body.p2_a1_1;
            let p2_a1_2 = req.body.p2_a1_2;
            let p2_a2_1 = req.body.p2_a2_1;
            let p2_a2_2 = req.body.p2_a2_2;
            let p2_a3_1 = req.body.p1_a3_1;
            let p2_a3_2 = req.body.p1_a3_2;

            let p1_a1_1s = req.body.p1_a1_1s;
            let p1_a1_2s = req.body.p1_a1_2s;
            let p1_a2_1s = req.body.p1_a2_1s;
            let p1_a2_2s = req.body.p1_a2_2s;
            let p1_a3_1s = req.body.p1_a3_1s;
            let p1_a3_2s = req.body.p1_a3_2s;
            let p2_a1_1s = req.body.p2_a1_1s;
            let p2_a1_2s = req.body.p2_a1_2s;
            let p2_a2_1s = req.body.p2_a2_1s;
            let p2_a2_2s = req.body.p2_a2_2s;
            let p2_a3_1s = req.body.p2_a3_1s;
            let p2_a3_2s = req.body.p2_a3_2s;

            let cleaned_alleles = tri_clean_alleles(p1_a1_1, p1_a1_2, p1_a2_1, p1_a2_2, p1_a3_1, p1_a3_2, p2_a1_1, p2_a1_2, p2_a2_1, p2_a2_2, p2_a3_1, p2_a3_2);
            let cleaned_superscripts = tri_clean_superscripts(p1_a1_1s, p1_a1_2s, p1_a2_1s, p1_a2_2s, p1_a3_1s, p1_a3_2s, p2_a1_1s, p2_a1_2s, p2_a2_1s, p2_a2_2s, p2_a3_1s, p2_a3_2s);

            let _a1 = tri_foil(cleaned_alleles[0], cleaned_superscripts[0]);
            let _a2 = tri_foil(cleaned_alleles[1], cleaned_superscripts[1]);

            let cross = tri_cross(_a1, _a2);
            let def = cleaned_alleles;
            let superscripts = cleaned_superscripts;

            res.render('squares/trihybrid', { title: 'Trihybrid', _a1, _a2, def, cross, superscripts});
            });
        }
        else {
            let p1_a1_1 = req.body.p1_a1_1;
            let p1_a1_2 = req.body.p1_a1_2;
            let p1_a2_1 = req.body.p1_a2_1;
            let p1_a2_2 = req.body.p1_a2_2;
            let p1_a3_1 = req.body.p1_a3_1;
            let p1_a3_2 = req.body.p1_a3_2;
            let p2_a1_1 = req.body.p2_a1_1;
            let p2_a1_2 = req.body.p2_a1_2;
            let p2_a2_1 = req.body.p2_a2_1;
            let p2_a2_2 = req.body.p2_a2_2;
            let p2_a3_1 = req.body.p1_a3_1;
            let p2_a3_2 = req.body.p1_a3_2;

            let p1_a1_1s = req.body.p1_a1_1s;
            let p1_a1_2s = req.body.p1_a1_2s;
            let p1_a2_1s = req.body.p1_a2_1s;
            let p1_a2_2s = req.body.p1_a2_2s;
            let p1_a3_1s = req.body.p1_a3_1s;
            let p1_a3_2s = req.body.p1_a3_2s;
            let p2_a1_1s = req.body.p2_a1_1s;
            let p2_a1_2s = req.body.p2_a1_2s;
            let p2_a2_1s = req.body.p2_a2_1s;
            let p2_a2_2s = req.body.p2_a2_2s;
            let p2_a3_1s = req.body.p2_a3_1s;
            let p2_a3_2s = req.body.p2_a3_2s;

            let cleaned_alleles = tri_clean_alleles(p1_a1_1, p1_a1_2, p1_a2_1, p1_a2_2, p1_a3_1, p1_a3_2, p2_a1_1, p2_a1_2, p2_a2_1, p2_a2_2, p2_a3_1, p2_a3_2);
            let cleaned_superscripts = tri_clean_superscripts(p1_a1_1s, p1_a1_2s, p1_a2_1s, p1_a2_2s, p1_a3_1s, p1_a3_2s, p2_a1_1s, p2_a1_2s, p2_a2_1s, p2_a2_2s, p2_a3_1s, p2_a3_2s);

            let _a1 = tri_foil(cleaned_alleles[0], cleaned_superscripts[0]);
            let _a2 = tri_foil(cleaned_alleles[1], cleaned_superscripts[1]);

            let cross = tri_cross(_a1, _a2);
            let def = cleaned_alleles;
            let superscripts = cleaned_superscripts;

            res.render('squares/trihybrid', { title: 'Trihybrid', _a1, _a2, def, cross, superscripts});
        }
    }
];

function blood_cross(a, b){
    let tl = a[0].concat(b[0]);
    let tr = a[0].concat(b[1]);
    let bl = a[1].concat(b[0]);
    let br = a[1].concat(b[1]);

    if(tl[0] != tl[0].toUpperCase()){
        tl = b[0].concat(a[0]);
    }

    if(tr[0] != tr[0].toUpperCase()){
        tr = b[1].concat(a[0]);
    }

    if(bl[0] != bl[0].toUpperCase()){
        bl = b[0].concat(a[1]);
    }

    if(br[0] != br[0].toUpperCase()){
        br = b[1].concat(a[1]);
    }

    return [[tl, tr], [bl, br]];
}

function blood_clean(a){
    if(a == undefined || a == '' || a == '-'){
        return '.';
    } else {
        return a[0];
    }
}

function tri_cross(_a1, _a2){
    let cross = [];

    for(let j = 0; j < 8; j++){
        let row = [];
        for(let i = 0; i < 8; i++){
            let a = _a1[i][0].concat(_a1[i][1].concat(_a1[i][2]));
            let b = _a2[j][0].concat(_a2[j][1].concat(_a2[j][2]));

            let a1 = a.slice(0, 2).concat(b.slice(0, 2));
            if(a1[0] != a1[0].toUpperCase()){
                a1 = b.slice(0, 2).concat(a.slice(0, 2));
            }

            let b1 = a.slice(2, 4).concat(b.slice(2, 4));
            if(b1[0] != b1[0].toUpperCase()){
                b1 = b.slice(2, 4).concat(a.slice(2, 4));
            }

            let c1 = a.slice(4, 6).concat(b.slice(4, 6));
            if(c1[0] != c1[0].toUpperCase()){
                c1 = b.slice(4, 6).concat(a.slice(4, 6));
            }

            row.push(a1.concat(b1.concat(c1)));
        }
        cross.push(row);
    }

    return cross;
}

function tri_foil(a, b){
    return [[[a[0][0], b[0][0]], [a[1][0], b[1][0]], [a[2][0], b[2][0]]], [[a[0][0], b[0][0]], [a[1][0], b[1][0]], [a[2][1], b[2][1]]], [[a[0][0], b[0][0]], [a[1][1], b[1][1]], [a[2][0], b[2][0]]], [[a[0][0], b[0][0]], [a[1][1], b[1][1]], [a[2][1], b[2][1]]], [[a[0][1], b[0][1]], [a[1][0], b[1][0]], [a[2][0], b[2][0]]], [[a[0][1], b[0][1]], [a[1][0], b[1][0]], [a[2][1], b[2][1]]], [[a[0][1], b[0][1]], [a[1][1], b[1][1]], [a[2][0], b[2][0]]], [[a[0][1], b[0][1]], [a[1][1], b[1][1]], [a[2][1], b[2][1]]]];    
}

function tri_clean_alleles(_p111, _p112, _p121, _p122, _p131, _p132, _p211, _p212, _p221, _p222, _p231, _p232){
    let p111 = _p111[0];
    let p112 = _p112[0];
    let p121 = _p121[0];
    let p122 = _p122[0];
    let p131 = _p131[0];
    let p132 = _p132[0];
    let p211 = _p211[0];
    let p212 = _p212[0];
    let p221 = _p221[0];
    let p222 = _p222[0];
    let p231 = _p231[0];
    let p232 = _p232[0];

    if(p111 == undefined || p111 == ''){
        p111 = 'A';
    }
    if(p112 == undefined || p112 == ''){
        p112 = 'a';
    }
    if(p121 == undefined || p121 == ''){
        p121 = 'B';
    }
    if(p122 == undefined || p122 == ''){
        p122 = 'b';
    }
    if(p131 == undefined || p131 == ''){
        p131 = 'C';
    }
    if(p132 == undefined || p132 == ''){
        p132 = 'c';
    }
    if(p211 == undefined || p211 == ''){
        p211 = 'A';
    }
    if(p212 == undefined || p212 == ''){
        p212 = 'a';
    }
    if(p221 == undefined || p221 == ''){
        p221 = 'B';
    }
    if(p222 == undefined || p222 == ''){
        p222 = 'b';
    }
    if(p231 == undefined || p231 == ''){
        p231 = 'C';
    }
    if(p232 == undefined || p232 == ''){
        p232 = 'c';
    }

    return [[[p111, p112], [p121, p122], [p131, p132]], [[p211, p212], [p221, p222], [p231, p232]]];
}

function tri_clean_superscripts(_p111, _p112, _p121, _p122, _p131, _p132, _p211, _p212, _p221, _p222, _p231, _p232){
    let p111 = _p111[0];
    let p112 = _p112[0];
    let p121 = _p121[0];
    let p122 = _p122[0];
    let p131 = _p131[0];
    let p132 = _p132[0];
    let p211 = _p211[0];
    let p212 = _p212[0];
    let p221 = _p221[0];
    let p222 = _p222[0];
    let p231 = _p231[0];
    let p232 = _p232[0];

    if(p111 == undefined || p111 == ''){
        p111 = '.';
    }
    if(p112 == undefined || p112 == ''){
        p112 = '.';
    }
    if(p121 == undefined || p121 == ''){
        p121 = '.';
    }
    if(p122 == undefined || p122 == ''){
        p122 = '.';
    }
    if(p131 == undefined || p131 == ''){
        p131 = '.';
    }
    if(p132 == undefined || p132 == ''){
        p132 = '.';
    }
    if(p211 == undefined || p211 == ''){
        p211 = '.';
    }
    if(p212 == undefined || p212 == ''){
        p212 = '.';
    }
    if(p221 == undefined || p221 == ''){
        p221 = '.';
    }
    if(p222 == undefined || p222 == ''){
        p222 = '.';
    }
    if(p231 == undefined || p231 == ''){
        p231 = '.';
    }
    if(p232 == undefined || p232 == ''){
        p232 = '.';
    }

    return [[[p111, p112], [p121, p122], [p131, p132]], [[p211, p212], [p221, p222], [p231, p232]]];
}

function split_str_to_arr(a){
    return [[[a[0][0][0], a[0][0][1]], [a[0][1][0], a[0][1][1]]], [[a[1][0][0], a[1][0][1]], [a[1][1][0], a[1][1][1]]], [[a[2][0][0], a[2][0][1]], [a[2][1][0], a[2][1][1]]], [[a[3][0][0], a[3][0][1]], [a[3][1][0], a[3][1][1]]]];
}

function di_split_cross_str_to_arr(a){
    return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]];
}

function di_cross(a, b){
    let cross = [];
    for(let j = 0; j < 4; j++){
        let row = [];
        for(let i = 0; i < 4; i++){
            let a1 = a[i][0][0] + a[i][0][1] + b[j][0][0] + b[j][0][1];
            if(a1[0] != a1[0].toUpperCase()){
                a1 = b[j][0][0] + b[j][0][1] + a[i][0][0] + a[i][0][1];
            }

            let b1 = a[i][1][0] + a[i][1][1] + b[j][1][0] + b[j][1][1];
            if(b1[0] != b1[0].toUpperCase()){
                b1 = a[i][1][0] + a[i][1][1] + b[j][1][0] + b[j][1][1];
            }

            row.push(di_split_cross_str_to_arr(a1 + b1));
        }
        cross.push(row);
    }
    return cross;
}

function di_foil(a){
    return [[a[0][0], a[1][0]], [a[0][0], a[1][1]], [a[0][1], a[1][0]], [a[0][1], a[1][1]]];
}

function di_clean_superscripts(p1_a1_1, p1_a1_2, p1_a2_1, p1_a2_2, p2_a1_1, p2_a1_2, p2_a2_1, p2_a2_2){
    let p1a1_1 = p1_a1_1[0];
    let p1a1_2 = p1_a1_2[0];
    let p1a2_1 = p1_a2_1[0];
    let p1a2_2 = p1_a2_2[0];
    let p2a1_1 = p2_a1_1[0];
    let p2a1_2 = p2_a1_2[0];
    let p2a2_1 = p2_a2_1[0];
    let p2a2_2 = p2_a2_2[0];

    if(p1a1_1 == undefined || p1a1_1 == ''){
        p1a1_1 = '.';
    }
    if(p1a1_2 == undefined || p1a1_2 == ''){
        p1a1_2 = '.';
    }
    if(p1a2_1 == undefined || p1a2_1 == ''){
        p1a2_1 = '.';
    }
    if(p1a2_2 == undefined || p1a2_2 == ''){
        p1a2_2 = '.';
    }
    if(p2a1_1 == undefined || p2a1_1 == ''){
        p2a1_1 = '.';
    }
    if(p2a1_2 == undefined || p1a1_2 == ''){
        p1a1_2 = '.';
    }
    if(p2a2_1 == undefined || p2a2_1 == ''){
        p2a2_1 = '.';
    }
    if(p2a2_2 == undefined || p2a2_2 == ''){
        p2a2_2 = '.';
    }

    return [[[p1a1_1, p1a1_2], [p1a2_1, p1a2_2]], [[p2a1_1, p2a1_2], [p2a2_1, p2a2_2]]];
}

function di_clean_alleles(p1_a1_1, p1_a1_2, p1_a2_1, p1_a2_2, p2_a1_1, p2_a1_2, p2_a2_1, p2_a2_2){
    let p1a1_1 = p1_a1_1[0];
    let p1a1_2 = p1_a1_2[0];
    let p1a2_1 = p1_a2_1[0];
    let p1a2_2 = p1_a2_2[0];
    let p2a1_1 = p2_a1_1[0];
    let p2a1_2 = p2_a1_2[0];
    let p2a2_1 = p2_a2_1[0];
    let p2a2_2 = p2_a2_2[0];

    if(p1a1_1 == undefined || p1a1_1 == ''){
        p1a1_1 = 'A';
    }
    if(p1a1_2 == undefined || p1a1_2 == ''){
        p1a1_2 = 'a';
    }
    if(p1a2_1 == undefined || p1a2_1 == ''){
        p1a2_1 = 'B';
    }
    if(p1a2_2 == undefined || p1a2_2 == ''){
        p1a2_2 = 'b';
    }
    if(p2a1_1 == undefined || p2a1_1 == ''){
        p2a1_1 = 'A';
    }
    if(p2a1_2 == undefined || p1a1_2 == ''){
        p1a1_2 = 'a';
    }
    if(p2a2_1 == undefined || p2a2_1 == ''){
        p2a2_1 = 'B';
    }
    if(p2a2_2 == undefined || p2a2_2 == ''){
        p2a2_2 = 'b';
    }

    return [[[p1a1_1, p1a1_2], [p1a2_1, p1a2_2]], [[p2a1_1, p2a1_2], [p2a2_1, p2a2_2]]];
}

function mono_clean_alleles(_p1a1_1, _p1a1_2, _p2a1_1, _p2a1_2){
    let p1a1_1 = _p1a1_1[0];
    let p1a1_2 = _p1a1_2[0];
    let p2a1_1 = _p2a1_1[0];
    let p2a1_2 = _p2a1_2[0];

    if(p1a1_1 == undefined || p1a1_1 == ''){
        p1a1_1 = 'A';
    }
    if(p1a1_2 == undefined || p1a1_2 == ''){
        p1a1_2 = 'a';
    }
    if(p2a1_1 == undefined || p2a1_1 == ''){
        p2a1_1 = 'A';
    }
    if(p2a1_2 == undefined || p2a1_2 == ''){
        p2a1_2 = 'a';
    }

    return [p1a1_1, p1a1_2, p2a1_1, p2a1_2];
}

function mono_clean_superscripts(_p1a1_1, _p1a1_2, _p2a1_1, _p2a1_2){
    let p1a1_1 = _p1a1_1[0];
    let p1a1_2 = _p1a1_2[0];
    let p2a1_1 = _p2a1_1[0];
    let p2a1_2 = _p2a1_2[0];

    if(p1a1_1 == undefined || p1a1_1 == ''){
        p1a1_1 = '.';
    }
    if(p1a1_2 == undefined || p1a1_2 == ''){
        p1a1_2 = '.';
    }
    if(p2a1_1 == undefined || p2a1_1 == ''){
        p2a1_1 = '.';
    }
    if(p2a1_2 == undefined || p2a1_2 == ''){
        p2a1_2 = '.';
    }

    return [p1a1_1, p1a1_2, p2a1_1, p2a1_2];
}

function mono_cleaned_cross(a, s){
    let TL = a[1][0] + s[1][0][0] + a[0][0] + s[0][0][0];
    let TR = a[1][0] + s[1][0][0] + a[0][1] + s[0][0][1];
    let BL = a[1][1] + s[1][0][1] + a[0][0] + s[0][0][0];
    let BR = a[1][1] + s[1][0][1] + a[0][1] + s[0][0][1];

    if(TL[0] != TL[0].toUpperCase()){
        TL = a[0][0] + s[0][0][0] + a[1][0] + s[1][0][0];
    }
    if(TR[0] != TR[0].toUpperCase()){
        TR = a[0][1] + s[0][0][1] + a[1][0] + s[1][0][0];
    }
    if(BL[0] != BL[0].toUpperCase()){
        BL = a[0][0] + s[0][0][0] + a[1][1] + s[1][0][1];
    }
    if(BR[0] != BR[0].toUpperCase()){
        BR = a[0][1] + s[0][0][1] + a[1][1] + s[1][0][1];
    }

    return [[TL, TR], [BL, BR]];
}